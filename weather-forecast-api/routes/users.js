const express = require('express')
const router = express.Router()
const UserRouter = require('../controllers/user')
const UserModel = require('../models/user')

router.get('/users', async (req, res) => {
  const users = await UserModel.find({})
  res.status(200).json(users)
})

router.post('/users/register', async (req, res) => {
  try {
    const res = await UserModel.findOne({ email: req.body.email })
    if (!res) {
      const newUser = await UserRouter(req.body)
      const saved = await newUser.save()
      res.status(200).json(saved)
    } else {
      res.json({ error: 'User already exists' })
    }
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
})

router.put('/users/:id', async (req, res) => {
  try {
    const updated = await UserModel.findOneAndUpdate(
      {
        id: req.params.id
      },
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(updated)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
})

router.delete('/users/:id', async (req, res) => {
  try {
    const removed = await UserModel.findOneAndRemove({
      email: req.params.id
    })
    res.status(200).json(removed)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
})

module.exports = router

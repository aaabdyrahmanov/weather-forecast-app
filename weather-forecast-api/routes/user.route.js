const express = require('express')
const router = express.Router()
const UserRouter = require('../controllers/user.controller')
const UserModel = require('../models/user.model')

router.post('/users/user', async ({ body }, res, next) => {
  const NewUser = UserRouter(body)
  NewUser.save()
    .then(item =>
      res.status(200).send({
        status: 'Success',
        data: item
      })
    )
    .catch(err => {
      next()
      return res.status(401).send({
        status: 'Failed',
        error: err.message
      })
    })
})

router.get('/users', async (req, res, next) => {
  const users = await UserModel.find({})
  res.send(users)
})

router.put('/users/userId', async (req, res, next) => {
  const users = await UserModel.findOneAndUpdate({})
  res.send(users)
})

router.delete('/users/userId', async (req, res, next) => {
  const users = await UserModel.findOneAndRemove({})
  res.send(users)
})

module.exports = router

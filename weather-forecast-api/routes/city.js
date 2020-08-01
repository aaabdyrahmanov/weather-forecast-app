const express = require('express')
const router = express.Router()
const CityRouter = require('../controllers/city')
const CityModel = require('../models/cities')

router.get('/cities', async (req, res) => {
  const cities = await CityModel.find({})
  res.status(200).json(cities)
})

router.post('/cities/new', async (req, res) => {
  try {
    const newCity = await CityRouter(req.body)
    const saved = await newCity.save()
    res.status(200).json(saved)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
})

router.put('/cities/:id', async (req, res) => {
  try {
    const updated = await CityModel.findOneAndUpdate(
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

router.delete('/cities/:id', async (req, res) => {
  try {
    console.log(req.params.id)
    const removed = await CityModel.findOneAndRemove({
      name: req.params.id
    })
    res.status(200).json(removed)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
})

module.exports = router

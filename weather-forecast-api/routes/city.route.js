const express = require('express')
const router = express.Router()
const CityRouter = require('../controllers/city.controller')
const CityModel = require('../models/cities.model')

router.post('/cities/city', async ({ body }, res, next) => {
  const newCity = await CityRouter(body)
  newCity
    .save()
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

router.get('/cities', async (req, res, next) => {
  const cities = await CityModel.find({})
  res.send(cities)
})

router.put('/cities/cityId', async (req, res, next) => {
  const cities = await CityModel.findOneAndUpdate({})
  res.send(cities)
})

router.delete('/cities/cityId', async (req, res, next) => {
  const cities = await CityModel.findOneAndRemove(':cityId')
  res.send(cities)
})

module.exports = router

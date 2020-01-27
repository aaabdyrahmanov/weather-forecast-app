const CitySchema = require('../models/cities.model')

const NewCity = city => {
  return CitySchema.create(city).then(data => {
    console.log(data)
  })
}

module.exports = NewCity

const CitySchema = require('../models/cities')

const NewCity = city => {
  return CitySchema.create(city).then(data => {
    console.log(data)
  })
}

module.exports = NewCity

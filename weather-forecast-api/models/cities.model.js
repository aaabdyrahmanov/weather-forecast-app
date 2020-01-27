var mongoose = require('mongoose')

const CitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  }
})

module.exports = mongoose.model('city', CitiesSchema)

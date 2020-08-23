const mongoose = require('mongoose')

const CitiesSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
)

module.exports =  mongoose.model('city', CitiesSchema)


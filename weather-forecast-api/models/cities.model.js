var mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const CitiesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})
CitiesSchema.plugin(AutoIncrement, { inc_field: 'id' })

module.exports = mongoose.model('city', CitiesSchema)

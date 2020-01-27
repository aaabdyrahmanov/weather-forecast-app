var mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema({
  id: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'user'
  },
  date: {
    type: Date
  },
  location_id: {
    type: String
  },
  status: {
    type: String,
    required: true,
    enum: ['success', 'fail'],
    default: 'success'
  },
  duration: {
    type: String
  }
})

ReportSchema.index({ user: 1, name: 1 }, { unique: true })

module.exports = mongoose.model('report', ReportSchema)

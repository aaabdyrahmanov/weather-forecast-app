var mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  locationId: {
    type: String
  },
  userIp: {
    type: String
  },
  result: {
    type: String
  },
  duration: {
    type: String
  },
  status: {
    type: String,
    required: true,
    enum: ['success', 'fail'],
    default: 'success'
  }
})

module.exports = mongoose.model('reports', ReportSchema)

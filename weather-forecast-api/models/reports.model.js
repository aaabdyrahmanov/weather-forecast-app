const mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema({
  user_id: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  },
  location_id: {
    type: String
  },
  user_ip: {
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

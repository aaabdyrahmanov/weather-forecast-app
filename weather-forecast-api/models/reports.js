const mongoose = require('mongoose')

const ReportSchema = new mongoose.Schema(
  {
    user: {
      type: String
    },
    date: {
      type: Date,
      default: new Date()
    },
    location: {
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
  },
  {
    timestamps: true
  }
)

module.exports = mongoose.model('reports', ReportSchema)


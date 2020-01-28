const ReportSchema = require('../models/reports.model')

const NewReport = report => {
  return ReportSchema.create(report).then(data => {
    console.log(data)
  })
}

module.exports = NewReport

const express = require('express')
const router = express.Router()
const ReportController = require('../controllers/report.controller')
const ReportsModel = require('../models/reports.model')

router.post('/reports/report', async ({ body }, res, next) => {
  const NewReport = await ReportController(body)
  NewReport.save()
    .then(item =>
      res.status(200).send({
        status: 'Success',
        data: item
      })
    )
    .catch(err => {
      next()
      return res.status(401).send({
        status: 'Failed',
        error: err.message
      })
    })
})

router.get('/reports', async (req, res, next) => {
  const reports = await ReportsModel.find({})
  res.send(reports)
})

router.delete('/reports/report', async (req, res, next) => {
  const reports = await ReportsModel.findOneAndRemove({})
  res.send(reports)
})

module.exports = router

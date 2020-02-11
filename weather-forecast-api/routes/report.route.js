const express = require('express')
const router = express.Router()
const ReportRouter = require('../controllers/report.controller')
const ReportsModel = require('../models/reports.model')

router.post('/reports/new', async (req, res) => {
  try {
    console.log(req.body)
    const x = new Date()
    req.body.push(x.toUTCString())
    console.log('dateee', req.body.date)
    const newReport = await ReportRouter(req.body)
    const saved = await newReport.save()
    res.status(200).json(saved)
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
})

router.get('/reports', async (req, res) => {
  const reports = await ReportsModel.find({})
  res.status(200).json(reports)
})

router.delete('/reports', async (req, res) => {
  try {
    const removed = ReportsModel.deleteMany(
      { result: req.body[0].result },
      (err, data) => {
        if (err) {
          console.log(err)
        }
        console.log(data)
      }
    )
    res.status(200).json(removed)
  } catch (error) {
    console.log(error)
    res.status(400).end()
  }
})
module.exports = router

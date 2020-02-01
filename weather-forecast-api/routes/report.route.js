const express = require('express')
const router = express.Router()
const ReportController = require('../controllers/report.controller')
const ReportsModel = require('../models/reports.model')

router.post('/reports/new', async ({ body }, res, next) => {
  try {
    const newReport = await ReportController(body)
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

module.exports = router

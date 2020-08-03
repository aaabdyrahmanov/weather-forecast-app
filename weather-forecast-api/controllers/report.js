const ReportModel = require('../models/reports')


async function getAll (req, res) {
  try {
    const reports = await ReportModel.find({})
    res.status(200).json(reports)
  } catch (error) {
    res.status(400).send('Error: ' + error)  
  }
}


function addOne (req, res) {
  try {
    const newReport = new ReportModel({
      user: req.body.user,
      location: req.body.location,
      user_ip: req.body.userIP,
      result: req.body.result,
      duration: req.body.duration,
      status: req.body.status
    })
    res.status(200).json(newReport)
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}


async function removeAll (req, res) {
  try {
    const removed = await ReportsModel.deleteMany({})
    res.status(200).json(removed)
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}



module.exports = { getAll, addOne, removeAll }

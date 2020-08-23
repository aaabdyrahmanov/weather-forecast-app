const express = require('express')
const report = require('../controllers/report')

const router = express.Router()


/**
 * GET /api/v1/report
 */
router.get('/', report.getAll)


/**
 * POST /api/v1/report
 */
router.post('/', report.addOne)


/**
  DELETE /api/v1/report
 */
router.delete('/', report.removeAll)



module.exports = router

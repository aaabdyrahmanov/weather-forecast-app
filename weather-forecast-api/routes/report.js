const express = require('express')
const report = require('../controllers/report')

const router = express.Router()


/**
 * GET /api/v1/report/:id
 */
router.get('/:id', report.getAll)


/**
 * POST /api/v1/report/:id
 */
router.post('/:id', report.addOne)


/**
  DELETE /api/v1/report/:id
 */
router.delete('/:id', report.removeAll)



module.exports = router

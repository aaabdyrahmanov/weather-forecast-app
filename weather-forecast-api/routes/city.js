const express = require('express')
const city = require('../controllers/city')

const router = express.Router()


/**
  GET /api/v1/city/:id
 */
router.get('/:id', city.getAll)


/**
  POST /api/v1/city/:id
 */
router.post('/:id', city.addOne)


/**
  PUT /api/v1/city/:id
 */
router.put('/:id', city.updateOne)


/**
  DELETE /api/v1/city/:id
 */
router.delete('/:id', city.removeOne)


module.exports = router

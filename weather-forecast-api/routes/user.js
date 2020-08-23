const express = require('express')
const user = require('../controllers/user')

const router = express.Router()


/**
  GET /api/v1/user
 */
router.get('/', user.getAll)


/**
  POST /api/v1/user/register
 */
router.post('/register', user.register)


/**
  POST /api/v1/user/login
 */
router.post('/login', user.login)


/**
  PUT /api/v1/user/:id
 */
router.put('/:id', user.updateOne)


/**
  DELETE /api/v1/user/:id
 */
router.delete('/:id', user.removeOne)


module.exports = router

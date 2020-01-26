const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) => {
  console.log('A new request received at ' + Date())
  res.send('Hello World')
})

module.exports = router

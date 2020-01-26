const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { json, urlencoded } = require('body-parser')

const indexRouter = require('../routes/index')

const app = express()

const port = process.env.PORT || 1234

app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors())

app.use('/api/v1', indexRouter)

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app

const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const compression = require('compression')
const { json, urlencoded } = require('body-parser')

const app = express()

// CORS config
app.use(
    cors({
      origin: '*',
      optionsSuccessStatus: 200,
      credentials: false, 
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: [
        'Accept',
        'Content-Type',
        'X-Requested-With',
        'X-HTTP-Method-Override',
        'X-XSRF-TOKEN'
      ]
    })
)

// request body parser middleware
app.use(json())
app.use(urlencoded({ extended: false }))

// HTTP request logger middleware
app.use(morgan('dev'))

// compacting requests using GZIP middleware
app.use(compression())

// import Routes
require('../routes')(app)

module.exports = app

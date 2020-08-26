const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const { json, urlencoded } = require('body-parser')
const morgan = require('morgan')
const compression = require('compression')

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
        'Content-Type'
      ]
    })
)

// security middleware for Express
app.use(helmet());

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

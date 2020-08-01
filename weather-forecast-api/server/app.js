const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const { json, urlencoded } = require('body-parser')
const mongoose = require('mongoose')

const indexRouter = require('../routes/index')
const cityRouter = require('../routes/city')
const reportRouter = require('../routes/report')
const usersRouter = require('../routes/users')
const userRouter = require('../routes/user')

const app = express()

const port = process.env.PORT || 1234

const mongoURI = 'mongodb://localhost:27017'

app.use(morgan('dev'))
app.use(json())
app.use(urlencoded({ extended: false }))
app.use(cors())

app.use('/api/v1', indexRouter)
app.use('/api/v1', cityRouter)
app.use('/api/v1', reportRouter)
app.use('/api/v1/', userRouter)
app.use('/api/v1/', usersRouter)

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

// import Routes
require('../routes')(app)

app.listen(port, () => console.log(`Listening on port ${port}`))

module.exports = app

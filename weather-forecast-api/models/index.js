const mongoose = require('mongoose')
const { MONGODB_URI } = require('../config')

// Setup MongoDB with mongoose
const options = {
  useFindAndModify: false,
  useNewUrlParser: true,
  useCreateIndex: true,
  autoIndex: false,
  useUnifiedTopology: true
}

function connectDB () {
  try {
    mongoose.connect(MONGODB_URI, options)
    console.log('DB successfully connected')
  } catch (error) {
    console.error('DB authentication error : ' + error)
  }
}

module.exports = connectDB

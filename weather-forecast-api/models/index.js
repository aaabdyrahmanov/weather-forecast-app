const mongoose = require('mongoose')
const { MONGODB_URI } = require('../config')

mongoose
  .connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
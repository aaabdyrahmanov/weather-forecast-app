const mongoose = require('mongoose')
const mongoURI = 'mongodb://localhost:27017'

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(res => console.log('MongoDB Connected'))
  .catch(err => console.log(err))
const City = require('./city')
const Report = require('./report')
const User = require('./user')

module.exports = (app) => {
  app.use('/api/v1/city', City)
  app.use('/api/v1/report', Report)
  app.use('/api/v1/user', User)
}

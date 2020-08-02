const City = require('./city')
const Report = require('./report')
const Users = require('./users')
const User = require('./user')

module.exports = (app) => {
  app.use('/api/v1/cities', City)
  app.use('/api/v1/reports', Report)
  app.use('/api/v1/user', User)
  app.use('/api/v1/users', Users)
}

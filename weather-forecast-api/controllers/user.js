const UserSchema = require('../models/user')

const NewUser = user => {
  return UserSchema.create(user)
}

module.exports = NewUser

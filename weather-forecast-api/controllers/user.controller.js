const UserSchema = require('../models/user.model')

const NewUser = user => {
  return UserSchema.create(user)
}

module.exports = NewUser

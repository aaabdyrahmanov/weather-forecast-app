const UserSchema = require('../models/user.model')

const NewUser = user => {
  return UserSchema.create(user).then(data => {
    console.log(data)
  })
}

module.exports = NewUser

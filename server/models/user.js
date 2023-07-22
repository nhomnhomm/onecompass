const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema({
  username: {
    type: String
  },
  passwordHash: {
    type: String
  }
})

UserSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', UserSchema)
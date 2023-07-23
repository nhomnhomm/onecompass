const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const UserSchema = new mongoose.Schema({
  username: {
    type: String, 
    unique: true,
    required: true
  },
  passwordHash: {
    type: String, 
    required: true
  }
})

UserSchema.plugin(uniqueValidator)

UserSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
    delete passwordHash
  }
})

module.exports = mongoose.model('User', UserSchema)
const bcrypt = require('bcrypt')
const signupRouter = require('express').Router()
const User = require('../models/user')

signupRouter.post('/', async (request, response) => {
  const { username, password, email, cohort } = request.body
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    passwordHash,
    email, 
    cohort
  })

  try {
    console.log(user)
    const checkEmail = await User.findOne({email:email})
    console.log(checkEmail)
    if (checkEmail) {
      return response.status(401).json("This email is already registered")
    }
    else {
      response.json("notexist")
      const savedUser = await user.save()
      response.status(201).json(savedUser)
    }
  }
  catch(error){
    response.status(501)
  }
})

module.exports = signupRouter
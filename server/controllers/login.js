const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/user')

loginRouter.post('/', async (request, response) => {
  const { username, password } = request.body

  const user = await User.findOne({ username })
  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      username,
      password,
      user, 
      passwordCorrect,
      error: 'invalid username or password'
    })
  }

  const userForToken = {
    username: user.username,
    id: user._id,
  }

  const token = jwt.sign(userForToken, process.env.SECRET, { expiresIn: 60*60 })

  response
    .status(200)
    .send({ token, username: user.username })
})

function authenticateToken(request, response, next) {
  const authHeader = request.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]
  if (token === null) 
    return response.status(401)
                   .send('Cannot find header for authorization')
  jwt.verify(token, process.env.SECRET, (error, user) => {
    if (error) 
      return response.status(403)
                     .send('Cant verify JWT')
    // chưa hiểu nha =)) 
    request.user = user 
    next()
  })

}

loginRouter.get('/', authenticateToken, async (request, response) => {

})

module.exports = loginRouter
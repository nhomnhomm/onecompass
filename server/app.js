const config = require('./utils/config')
const express = require('express')
const app = express()
const cors = require('cors')
const logger = require('./utils/logger')
const mongoose = require('mongoose')
const User = require('./models/user')

const signupRouter = require('./controllers/signup')
const loginRouter = require('./controllers/login')
const usersRouter = require('./controllers/users')
const middleware = require('./utils/middleware')

mongoose.set('strictQuery',false)
logger.info('connecting to', config.MONGODB_URI)

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    logger.info('connected to MongoDB')
  })
  .catch((error) => {
    logger.error('error connecting to MongoDB:', error.message)
  })

app.use(cors())
app.use(express.json())
app.use(middleware.requestLogger)

// const user1 = new User({
//   username: 'khuetu',
//   passwordHash: '$2b$10$cSBOKtk4sja2jZa/2KEe5OEQmdsMy1S1SQtyuS0vd4y7Qv.OS97zW',
//   email: 'khuetu@randomgmail.com',
//   cohort: '2025',
// })

// user1.save().then(result => {
//   console.log('user saved!')
//   mongoose.connection.close()
// })

app.use('/api/signup', signupRouter)
app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

module.exports = app
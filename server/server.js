require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

// DO NOT SAVE YOUR PASSWORD TO GITHUB!!
const url =
  `mongodb+srv://fullstack:${password}@cluster0.o1opl.mongodb.net/?retryWrites=true&w=majority`

mongoose.set('strictQuery',false)
mongoose.connect(url)

app.use(cors())

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
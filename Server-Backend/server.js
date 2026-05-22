require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const routes = require('./routes/user.routes')
const cors = require('cors')

const PORT = process.env.PORT || 3000
const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', routes)

mongoose.connect(process.env.MONGO_URL)
.then(() => { 
  console.log(`Connected to mongo atlas successfull`)
  app.listen(PORT, () => console.log(`App Running at ${PORT}`))
})
.catch(() => console.log(`Something went wrong during the connection`))
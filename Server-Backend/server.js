require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const userRoutes = require('./routes/user.routes')
const teamRoutes = require('./routes/team.routes')

const PORT = process.env.PORT || 3000
const app = express()

app.use(cors({
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}))

app.options(/.*/, cors())
app.use(express.json())
app.use('/users', userRoutes)
app.use('/teams', teamRoutes)


mongoose.connect(process.env.MONGO_URL)
  .then(() => {
    console.log('Connected to MongoDB')
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`)
    })
  })
  .catch((err) => {
    console.log('Connection failed:', err)
  })
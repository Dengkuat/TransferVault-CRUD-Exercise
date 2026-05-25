const mongoose = require('mongoose')

const teamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 50
  },
  league: {
    type: String,
    required: true,
    enum: [
      'premier-league', 'la-liga', 'serie-a', 'bundesliga',
      'ligue-1', 'championship', 'champions-league',
      'eredivisie', 'primeira-liga', 'mls'
    ]
  },
  price: {
    type: Number,
    required: true,
    min: 1,
    max: 10
  }
}, { timestamps: true })

module.exports = mongoose.model('Team', teamSchema)
const Team = require('../models/team.model')

const addTeam = async (req, res) => {
  try {
    const { name, league, price } = req.body

    if (!name || !league || price === undefined)
      return res.status(400).json({ message: 'All fields are required' })

    const existing = await Team.findOne({
      name: { $regex: new RegExp(`^${name}$`, 'i') },
      league
    })
    if (existing)
      return res.status(400).json({ message: 'Team already exists in this league' })

    const team = await Team.create({ name, league, price })
    res.status(201).json(team)
  } catch (err) {
    if (err.name === 'ValidationError') {
      const message = Object.values(err.errors)[0].message
      return res.status(400).json({ message })
    }
    res.status(500).json({ message: 'Failed to add team' })
  }
}

const getTeamsByLeague = async (req, res) => {
  try {
    const teams = await Team.find({ league: req.params.league })
    res.json(teams)
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch teams' })
  }
}

const deleteTeam = async (req, res) => {
  try {
    const team = await Team.findByIdAndDelete(req.params.id)
    if (!team)
      return res.status(404).json({ message: 'Team not found' })
    res.json({ message: 'Team deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete team' })
  }
}

module.exports = { addTeam, getTeamsByLeague, deleteTeam }
const express = require('express')
const router = express.Router()
const { addTeam, getTeamsByLeague, deleteTeam } = require('../controllers/team.controller')

router.post('/', addTeam)
router.get('/:league', getTeamsByLeague)
router.delete('/:id', deleteTeam)

module.exports = router
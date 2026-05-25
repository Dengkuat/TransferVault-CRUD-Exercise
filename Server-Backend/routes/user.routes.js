const express = require('express')
const router = express.Router()
const { createUser, loginUser, deleteUser } = require('../controllers/user.controller')
const verifyToken = require('../middleware/auth.middleware')

router.post('/', createUser)
router.post('/login', loginUser)
router.delete('/me', verifyToken, deleteUser)

module.exports = router
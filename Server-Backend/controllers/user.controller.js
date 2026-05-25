const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    if (typeof name !== 'string' || typeof email !== 'string') {
      return res.status(400).json({ message: 'Name and Email must be of type string' })
    }

    const existingUser = await User.findOne({ email })
    if (existingUser) {
      return res.status(400).json({ message: 'Email already in use' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new User({ name, email, password: hashedPassword })
    await newUser.save()

    res.status(201).json({ message: 'User created successfully' })

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message })
  }
}

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ message: 'All fields are required' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(404).json({ message: 'User not found' })
    }

    const passwordMatch = await bcrypt.compare(password, user.password)
    if (!passwordMatch) {
      return res.status(400).json({ message: 'Invalid credentials' })
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1d' }
    )

    res.status(200).json({ token })

  } catch (err) {
    res.status(500).json({ message: 'Something went wrong', error: err.message })
  }
}

const deleteUser = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.user.id)
    res.json({ message: 'Account deleted' })
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete account' })
  }
}

module.exports = { createUser, loginUser, deleteUser }
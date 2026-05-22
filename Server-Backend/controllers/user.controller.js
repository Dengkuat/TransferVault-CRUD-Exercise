const Users = require('../models/user.model')
const bcrypt = require('bcrypt')

const createUser = async (req, res) => {
  try{
    const {name, email, password} = req.body;

    if(!name || !email || !password){
      return res.status(400).json({message:'All field are required'})
    }

    if(typeof name !== 'string' || typeof email !== 'string'){
      return res.status(400).json({
        message:'Name and Email must be of type string'
      })
    }

    const existingUser = await Users.findOne({email})
    if(existingUser){
      return res.status(400).json({mesasge:'Email already in use'})
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = new Users({
      name,
      email,
      password:hashedPassword
    })

    await newUser.save()
    res.status(201).json({
     message:`User created successfully`,
     newUser
    })

  }catch(err){
    res.status(500).json({message:`Something went really wrong`, err})
  }
}

module.exports = {createUser}
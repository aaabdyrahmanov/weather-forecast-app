const jwt = require('jsonwebtoken')
const UserModel = require('../models/user') 

const { SECRET_KEY } = require('../config')


async function getAll (req, res) {
  try {
    const users = await UserModel.find({}).sort({ date: -1 })
    res.status(200).json(users)    
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}

async function register (req, res) {
  try {
    const res = await UserModel.findOne({ email: req.body.email })
    // activate early return functionality 
    if (!res) {
      const newUser = new UserModel({
        first_name: req.body.firstName,
        last_name: req.body.lastName,
        email: req.body.email,
        password: req.body.password
      })
      res.status(200).json(newUser)
    } else {
      res.json({ error: 'User already exists' })
    }
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}

async function login (req, res) {
  const user = await UserModel.findOne({
    email: req.body.email
  })
  try {
    // activate early return functionality
    if(!user) {
      res.status(401).json({ error: 'Password is not correct' })
    }
    // activate early return functionality
    if (req.body.password !== user.password) {
      res.status(404).json({ error: 'User does not exist' })
    }
    const payload = {
      first_name: user.first_name,
      last_name: user.last_name
    }
    const token = jwt.sign(
      payload, 
      SECRET_KEY, { 
      expiresIn: 1440 
    })
    res.status(200).json(token)
  } catch (error) {
    res.status(400).send('Error: ' + error)    
  }
}

async function updateOne (req, res) {
  try {
    const updated = await UserModel.findOneAndUpdate(
      {
        email: req.body.email
      },
      req.body,
      {
        new: true
      }
    )
    res.status(200).json(updated)
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}

async function removeOne (req, res) {
  try {
    const removed = await UserModel.findOneAndRemove({
      email: req.body.email
    })
    res.status(200).json(removed)
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}

module.exports = { getAll, register, login, updateOne, removeOne }

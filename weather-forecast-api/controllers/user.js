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


function login (req, res) {
  UserModel.findOne({
    email: req.body.email
  })
    .then(user => {
      if (user) {
        if (req.body.password == user.password) {
          const payload = {
            first_name: user.first_name,
            last_name: user.last_name
          }
          let token = jwt.sign(payload, SECRET_KEY, {
            expiresIn: 1440
          })
          res.status(200).json(token)
        } else {
          res.status(401).send({ error: 'Password is not correct' })
          res.end()
        }
      } else {
        res.status(404).send({ error: 'User does not exist' })
      }
    })
    .catch((error) => {
      res.status(400).send('Error: ' + error)
    })
}


async function updateOne (req, res) {
  try {
    const updated = await UserModel.findOneAndUpdate(
      {
        id: req.params.id
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
      email: req.params.id
    })
    res.status(200).json(removed)
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}



module.exports = { getAll, register, login, updateOne, removeOne }

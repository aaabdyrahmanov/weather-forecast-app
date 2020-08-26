const CityModel = require('../models/cities')


async function getAll (req, res) {
  try {
    const cities = await CityModel.find({})
    res.status(200).json(cities)    
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}

function addOne (req, res) {
  try {
    const newCity = new CityModel({
      name: req.params.id
    })
    res.status(200).json(newCity)
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}

async function updateOne (req, res) {
  try {
    const updated = await CityModel.findOneAndUpdate(
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
    const removed = await CityModel.findOneAndRemove({
      name: req.params.id
    })
    res.status(200).json(removed)
  } catch (error) {
    res.status(400).send('Error: ' + error)
  }
}

module.exports = { getAll, addOne, updateOne, removeOne }

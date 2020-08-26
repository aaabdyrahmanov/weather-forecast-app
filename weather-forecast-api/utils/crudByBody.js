const getMany = model => async (req, res) => {
  try {
    const docs = await model
      .find({})
      .sort({ date: -1 })

    res.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    res.status(400).send({
      code: 400,
      message: e._message
    })
  }
}

const createOne = model => async (req, res) => {
  try {
    const doc = await model.create(req.body)
    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).send({
      code: 400,
      message: e._message
    })
  }
}

const removeMany = model => async (req, res) => {
  try {
    const removed = await model.deleteMany()

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: removed })
  } catch (e) {
    console.error(e)
    res.status(400).send({
      code: 400,
      message: e._message
    })
  }
}

module.exports = crudControllers = (model) => {
  return {
    getAll: getMany(model),
    addOne: createOne(model),
    removeAll: removeMany(model),
  }
}
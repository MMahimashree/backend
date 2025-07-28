const tasks = require("../model/model")
const getTasks = async (req, res) => {
  try {
    const task = await tasks.find({})

    if (!tasks) {
      res.status(404).json({ message: "no task found" })
    }
    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

const createTasks = async (req, res) => {
  try {
    const task = await tasks.create(req.body)

    res.status(200).json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}

const updateTasks = async (req, res) => {
  try {
    const { id } = req.params
    const { title, description, completed } = req.body
    // const user =await users.find((u)=>u.id === id)
    const task = await tasks.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    })
    if (!tasks) {
      res.json({ message: "no user found" })
    }
    task.tasks=task,
  res.json(task)
  } catch (error) {
    res.status(500).json(error)
  }
}
const deleteTasks = async (req, res) => {
  try {
    const { id } = req.params
    const task = await tasks.findOneAndDelete()
    if (!task) {
      res.json({ message: "no task found" })
    }
    res.status(200).json({ message: "task deleted " })
  } catch (error) {
    res.status(500).json(error)
  }
}

module.exports = {
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
}

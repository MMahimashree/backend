const express = require("express")
const router = express.Router()
router.use(express.json())

const {
  getTasks,
  createTasks,
  updateTasks,
  deleteTasks,
} = require("../controller/controller")



router.get("/", getTasks)

router.post("/", createTasks)

router.put("/:id", updateTasks)

router.delete("/:id", deleteTasks)

module.exports = { router }

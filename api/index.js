const express = require('express')
const app =express()
require("dotenv").config()
const port  = process.env.PORT
const { router } = require("../routes/routes")
const cors = require('cors')
app.use(cors())


app.use("/api/tasks", router)

const connectDB = require("../connect/connect")





const start = async() => {
  try {
    await connectDB(process.env.MONGO_URI)
    app.listen(port, () => {
      console.log("working")
    })
  }catch(error){
    console.log(error)
  }
}

start()







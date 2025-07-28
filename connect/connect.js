const mongoose = require("mongoose")

const connectDB = async(url) => {
  await mongoose.connect(url)
    .then(() => {
      console.log("connected")
    })
    .catch((err) => {
      console.log(err)
    })
}

module.exports = connectDB

const  mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    task:{
        type : String,
        required : true
    }
    
})

module.exports =mongoose.model("tasks",userSchema)
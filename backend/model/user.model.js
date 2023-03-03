const mongoose = require('mongoose')

const user_schema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const user = new mongoose.model("user", user_schema)
module.exports = user;

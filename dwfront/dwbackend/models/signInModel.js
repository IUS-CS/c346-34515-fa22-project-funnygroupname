const mongoose = require("mongoose")

/**
 * Sets up mongoose schema for users signing in
 */
const usersTemplate = new mongoose.Schema({
    username: {
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    privilege: {
        type: String,
        required:true
    },
    firstName: {
        type:String,
        required:true
    },
    lastName: {
        type:String,
        required:true
    },
    dateJoined:{
        type:Date,
        required:true
    },
    lastActivity:{
        type:Date,
        default:Date.now()
    }

})


module.exports = mongoose.model('users', usersTemplate)
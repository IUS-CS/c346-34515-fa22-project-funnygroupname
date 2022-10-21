const mongoose = require("mongoose")

const appointmentTemplate = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    operation: {
        type: String,
        required:true
    },
    cost: {
        type: Number,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    dateOfRequest:{
        type:Date,
        default:Date.now()
    }

})


module.exports = mongoose.model('appointments', appointmentTemplate)
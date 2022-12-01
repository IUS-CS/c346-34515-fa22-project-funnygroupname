const mongoose = require("mongoose")

/**
 * Sets up mongoose schema for time worked (when clocked in and when clocked out)
 */
const timeWorkedByEmployeeTemplate = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    time:{
        type: Number,
        required:true
    },
    clockIn:{
        type:Number,
        required:true
    },
    clockOut:{
        type:Number,
        required:true
    }



})


module.exports = mongoose.model('timeworkedbyemployee', timeWorkedByEmployeeTemplate)
const mongoose = require("mongoose")
const serviceTemplate = new mongoose.Schema({
    serviceType: {
        type:String,
        required:true
    },
    serviceStartedDate:{
        type:Date,
        required:true
    },
    numbersOfCustomersServed:{
        type:String,
        required:true
    },
    serviceDescription:{
        type:String,
        required:true
    },
    serviceStatus:{
        type:String,
        required:true
    }



})


module.exports = mongoose.model('service', serviceTemplate)
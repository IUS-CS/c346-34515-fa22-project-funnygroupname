const mongoose = require("mongoose")
const CustomersTemplate = new mongoose.Schema({
    CustomerFullName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    homeAddress:{
        type:String,
        required:true

    },

    phoneNumber:{
        type:String,
        required:true

    },

    customerAge:{
        type:String,
        required:true
    },
    dayVisited:{
        type:Date,
        required:true
    },

    typeOfServiceNeed:{
        type:String,
        required:true

    },
    emergencyContact: {
        type: String,
        required:true
    },
    emergencyContactPhoneNumber: {
        type: Number,
        required:true
    },
    emergencyContactEmailAddress:{
        type:String,
        required:true
    }

})


module.exports = mongoose.model('customers', CustomersTemplate)
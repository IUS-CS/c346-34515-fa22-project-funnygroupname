const mongoose = require("mongoose")
const employeeTemplate = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    workHistory:{
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

    numberOfWorkHoursPerDay:{
        type:String,
        required:true

    },
    speciality: {
        type: String,
        required:true
    },
    salaryAmount: {
        type: Number,
        required:true
    },
    offDate:{
        type:Date,
        required:true
    },
    workDate:{
        type:Date,
        required:true
    }

})


module.exports = mongoose.model('employees', employeeTemplate)
const mongoose = require("mongoose")
const employeePayrollTemplate = new mongoose.Schema({
    fullName: {
        type:String,
        required:true
    },
    jobPositionTittle:{
        type:String,
        required:true
    },
    clockInTime:{
        type:String,
        required:true
    },

    clockOutTime:{
        type:String,
        required:true

    },
    idNumber:{
        type:String,
        required:true

    },

    numberOfHoursWorkedPerDay:{
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
    }

})


module.exports = mongoose.model('employeepayroll', employeePayrollTemplate)
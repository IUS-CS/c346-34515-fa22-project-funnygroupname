const mongoose = require("mongoose")
const serviceHistoryTemplate = new mongoose.Schema({
    totalNumbersOfCustomersServedSinceDayOne: {
        type:String,
        required:true
    },
    totalNumbersOfCustomersServedAnnually:{
        type:String,
        required:true
    },
    totalNumbersOfCustomersServedMonthly:{
        type:String,
        required:true
    },
    totalNumbersOfCustomersServedWeekly:{
        type:String,
        required:true
    },

    totalNumbersOfCustomersServedDaily:{
        type:String,
        required:true
    },

    totalNumbersOfCustomersServedHourly:{
        type:String,
        required:true
    },
    totalNumbersOfTypeServiceGivenSinceDayOne: {
        type:String,
        required:true
    },
    typeOfServiceGivenAnnually:{
        type:String,
        required:true
    },
    typeOfServiceGivenMonthly:{
        type:String,
        required:true
    },
    typeOfServiceGivenWeekly:{
        type:String,
        required:true
    },

    typeOfServiceGivenDaily:{
        type:String,
        required:true
    },

    typeOfServiceGivenHourly:{
        type:String,
        required:true
    },

    dateAndTimeCustomerServed:{
        type:Date,
        required:true
    },




})


module.exports = mongoose.model('servicehistory', serviceHistoryTemplate)
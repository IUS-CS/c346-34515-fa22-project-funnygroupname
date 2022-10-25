const mongoose = require("mongoose")
const PaymentsTemplate = new mongoose.Schema({
    payerName: {
        type:String,
        required:true
    },
    paymentReason:{
        type:String,
        required:true
    },
    paymentAmount:{
        type:Number,
        required:true
    },
    paymentDate:{
        type:Number,
        required:true
    },

    paymentTime:{
        type: Number,
        required:true
    }




})


module.exports = mongoose.model('payments', PaymentsTemplate)
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
        type:Date,
        required:true
    }
})


module.exports = mongoose.model('payments', PaymentsTemplate)
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const testSchema = new Schema({
    name:{
        type: String,
        required:true
    },
    num:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model('test', testSchema)
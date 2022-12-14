const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;
const productSchema = new mongoose.Schema({
    name : {
        type : String,
        trim : true,
        required : true,
        maxlength : 32
    },
    description : {
        type : String,
        trim : true,
        required : true,
        maxlength : 500
    },
    price : {
        type : Number,
        required : true,
        maxlength : 10,
        trim : true
    },
    category : {
        type : ObjectId,
        ref : "Category",
        required: true
    },
    stock : {
        type : Number
    },
    sold : {
        type : Number,
        default : 0
    },
    photo : {
        data : Buffer,
        contentType : String,
    }
},{timestamps:true})

module.exports = mongoose.Schema("Product",productSchema);
const mongoose = require("mongoose");
const { ObjectId }  = mongoose.Schema;

const ProductCardSchema = new mongoose.Schema({
    product : {
        type : ObjectId,
        ref : "Product"
    },
    name : {
        type : String
    },
    count : {
        type : Number
    },
    price : {
        type : Number
    }
})

const ProductCart = mongoose.model("ProductCart",ProductCardSchema);

const OrderSchema = new mongoose.Schema({
    products : [ProductCardSchema],
    transaction_id : {},
    amount : { 
        type : Number
    },
    addeess : {
        type : String
    },
    updated : {
        type : Date
    },
    user : {
        type : ObjectId,
        ref :"User"
    }
},{timestamps : true})


const Order = mongoose.model("Order",OrderSchema);

module.exports = {
    Order,
    ProductCart
}
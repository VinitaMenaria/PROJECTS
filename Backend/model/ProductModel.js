const mongoose=require('mongoose')
const {type}=require('os')
const productSchema=new mongoose.Schema({
 name:{
    type:String,
    required:[true,"name is required"]
 },
 image:{
 type:String
},

description:{
    type:String,
},
price:{
    type:Number,
    required:true
},
stock:{
    type:Number,
    default:0
},
discountPercentage:{
    type:Number,
}}
)

const Product=mongoose.model('Product',productSchema);
module.exports=Product;
const mongoose = require('mongoose')
const productschma = new mongoose.Schema({
 name:{
    type:String
 },
 mrp:{
    type:Number
 },
 presp:{
    type:Boolean
 },
 brand:{
    type:String
 },
 saltcomp:{
    type:String
 },
 storage:{
    type:String
 },
 prodinfo:{
    type:String
 },
 usesof:{
    type:String
 }
    
})
module.exports = mongoose.model('Product',productschma)
const mongoose=require("mongoose")
const productsSchema=mongoose.Schema({
productName: { type: String},
imageFile: {type:String},
price: {type:Number},
purchaseDetails: {type:mongoose.Schema.Types.ObjectId, ref:'purchaseDetails'}
})
module.exports = mongoose.model('product', productsSchema)
const mongoose=require("mongoose")

const purchaseSchema=mongoose.Schema({
userName:{
    type:String,
    required:true
},
date:{
    type:Date
},
sum:{
    type:Number
},
productsAmount:{
    type:Number
},
products:[{type:mongoose.Schema.Types.ObjectId, ref:'product'}]

})
module.exports=mongoose.model('purchaseDetails', purchaseSchema)

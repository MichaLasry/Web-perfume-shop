// const jwt = require("jsonwebtoken")
const PurchaseDetails = require("../models/purchaseDetails")
const User = require("../models/users")
const createPurchaseDetails=async(req,res)=>{
  let purchaseDetails=new PurchaseDetails(req.body)
  try{
    await purchaseDetails.save()
    let user = await User.findOne({userName:purchaseDetails.userName})
    user.purchaseDetails.push(purchaseDetails)
    await user.save()
  }
  catch(err){
    err=>res.json(err)
  }
}

const getPurchaseDetails=(req,res)=>{
    let purchaseDetails=PurchaseDetails.findById(req.params.id, (err, purchaseDetails)=>{
        if(err)
          res.json(err)
        if(purchaseDetails)
           res.json({purchaseDetails})
    })
    if(purchaseDetails==null)
    res.json("not exist")
}
const getAllPurchaseDetails= async(req,res)=>{
  try{
    let purchaseDetails = await PurchaseDetails.find()
    res.status(200).json(purchaseDetails)
    // console.log( await Post.findById().populate('magazine'))
  }
  catch(err){
    res.status(400).json(err)
  }
}

const updatePurchaseDetails=(req,res)=>{
    PurchaseDetails.findByIdAndUpdate(req.params.id, req.body, {new:true})
    .then(purchaseDetails=>res.send(purchaseDetails))
    .catch(err=>res.send(err))
}

const deletePurchaseDetails=(req,res)=>{
    PurchaseDetails.findByIdAndDelete(req.params.id, (err, purchaseDetails)=>{
        if(err)
           res.send(err)
        else{
            if(purchaseDetails)
              res.send(purchaseDetails)
            else
            res.send("not exist")
        }
    })
}

module.exports={createPurchaseDetails, 
                            getPurchaseDetails, 
                            getAllPurchaseDetails,  
                            updatePurchaseDetails, 
                            deletePurchaseDetails}
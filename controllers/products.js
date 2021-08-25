const Product = require("../models/products")
const PurchaseDetails = require('../models/purchaseDetails')
const createProduct = async (req, res) => {
  try {
      let product = new Product(req.body)
      await product.save()
      let purchaseDetails = await PurchaseDetails.findById(product.purchaseDetails)
      purchaseDetails.products.push(product._id)
      await purchaseDetails.save()
      console.log(purchaseDetails)
      res.status(200).json(product)
  } catch (error) {
      res.status(400).send(error)
  }
}

const getProduct =async (req,res) =>{
  try{
    let product = await Product.findById(req.params.productId) 
    res.status(200).json(product)
  }
  catch(err){
    res.status(400).json(err)
  }
}
//   Post.findById(req.params.postId).populate('magazine').then((post)=>{
//     // Task.findById(taskId).populate('user')
//     res.status(200).json(post)
//   }).catch((error)=>{
//     es.status(400).send(error)})
// }}

const getProducts = async(req,res) => {
  try{
    let products = await Product.find()
    res.status(200).json(products)
    // console.log( await Post.findById().populate('magazine'))
  }
  catch(err){
    res.status(400).json(err)
  }
}
const deleteProduct = (req,res)=>{
  Product.findByIdAndDelete(req.params.productId)
  .then((product) => res.json({massage:"product deleted",product})
  ).catch(err=>res.status(400).json(err))
}
const deleteProductFromPruchase = async(req,res)=>{
  try{
    let product = await Product.findById(req.params.productId)
    await PurchaseDetails.findByIdAndUpdate(product.purchaseDetails, {$pull: {products:product._id}},{new:true})
    res.status(200).json({massage:"product deleted from purchase",product})
  }
  catch(err){
    res.status(400).json(err)
  }
 }

const updateProduct = async(req,res)=>{
  let {productId}=req.params
  let newValues=req.body
  try{
  let product=await Product.findOneAndUpdate({_id:productId},newValues, {new: true})
  res.status(200).json({message:product})
}
catch(err){
  res.status(400).json(err)
 }
}
module.exports = {createProduct, 
                              deleteProduct, 
                              getProduct, 
                              getProducts, 
                              updateProduct, 
                              deleteProductFromPruchase}
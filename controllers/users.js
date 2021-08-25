const User = require('../models/users')
const jwt=require("jsonwebtoken")
const alert = require('alert');


const signUp=async(req,res)=>{
    const token = jwt.sign({userName:req.body.userName, password:req.body.password}, process.env.CERTIFICATE)
    
    let userExist=User.findOne({userName: req.body.userName})
    if (await userExist){
        res.status(400).send("UserName exist, please choose another userName")
    }
    else{
        try {
            let newuser = new User(req.body)
            await newuser.save((err,success)=>{
                if(err) console.log(err)
                if(success) console.log(success)
            })
            //res.send(`sign up successful! your details: ${user} your jwt: ${token}`)
        }
         catch (error) {
            console.log("err")
            res.status(400).json(error)
        }
    }
}

const signIn=async(req, res)=>{
    try{
        let user=await User.findOne(req.body)
        if(await user){
        alert( `welcomeback ${user.userName}`)
             res.send(`welcome ${req.body.userName} your jwt: ${token}` )}
        else{
             alert( "user not exist")
             res.send("use not exist")}
    }
    catch(err){
        res.send(err)
    }
}


const createUser = async (req, res) => {
    let currentUser = new User(req.body)
    try {
        await currentUser.save()
        res.status(200).json({ user: currentUser })
    }
    catch (error) {
        res.json({ status: 400, message: error })
    }
}
const getAllUsers = async (req, res) => {
    console.log("get all users")
    try {
        let users = await User.find()
        res.json({users})
    }
    catch (error) {
        res.json(error)
    }
}
const getUser = (req, res) => {
    let { userId } = req.params
    User.findById(userId)
        .then((user) => {
            res.json(user)
        })
        .catch((error) => {
            res.json(error)
        })
}
const updateUser=async(req,res)=>{
    let {userId}=req.params
    let newValues=req.body
    try{
    let user=await User.findOneAndUpdate({_id:userId},newValues, {new: true})
    res.json({message:user})
}
catch(err){
    res.json(err)
}
    }
    
const deleteUser=(req,res)=>{
    let {userId}=req.params
    User.findByIdAndDelete(userId,(error,user)=>{
        if(error)
        res.json(error)
        else {
            if(user)
            res.json(user)
            else
            res.send("user not found ")
        }
    })
}
module.exports = {
    createUser,
    getAllUsers,
    getUser,
    updateUser,
    deleteUser,
    signUp, 
    signIn
}

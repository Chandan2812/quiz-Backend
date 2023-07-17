const express=require("express")
const userRouter=express.Router()
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")
const {UserModel}=require("../model/user.model")


userRouter.post("/register",async (req,res)=>{
    try {
        const {userName,email}=req.body
        const isUserPresent=await UserModel.findOne({email})
        if(isUserPresent)
        {
            return res.send({msg:"User already exist"})
        }
        const newUser= new UserModel({userName,email})
        newUser.save()
        res.send({msg:"User added"})
    } catch (error) {
        res.send('An error occured')
    }
})

module.exports={userRouter}
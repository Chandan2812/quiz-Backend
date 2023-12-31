const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    userName:{type:String, required:true},
    email:{type:String, required:true, unique:true}
})

const UserModel=mongoose.model("User",userSchema)

module.exports={UserModel}
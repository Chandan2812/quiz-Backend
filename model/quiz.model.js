const mongoose=require("mongoose")
const {UserModel}=require("../model/user.model")

const quizSchema=mongoose.Schema({
    creator:String,
    title:String,
    description:String,
    questions:[{
        title:String,
        answerOptions:[String],
        correctOptions:[Number]
    }],
    leaderboard:[{
       user:{type:mongoose.Schema.Types.ObjectId, ref:UserModel},
       score:Number
    }]
})

const QuizModel=mongoose.model("Quiz",quizSchema)

module.exports={QuizModel}
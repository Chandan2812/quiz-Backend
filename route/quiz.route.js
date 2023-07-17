const express=require("express")
const quizRouter=express.Router()
const {QuizModel}=require("../model/quiz.model")

quizRouter.get("/",async (req,res)=>{
    try {
        const quiz=await QuizModel.find().populate('creator','userName email')
        res.send(quiz)
    } catch (error) {
        res.send('An error occured')
    }
})


quizRouter.post("/",async (req,res)=>{
    try {
        const {creator,title,description,questions}=req.body
        const quiz=new QuizModel({creator,title,description,questions})
        await quiz.save()
        res.send({msg:"quiz added"})
    } catch (error) {
        res.send(error.message)
    }
})


quizRouter.get("/:id/leaderboard",async (req,res)=>{
    try {
        const {quizId}=req.params

        const leaderboard=QuizModel.findById({quizId})
        .populate("creator","userName email")
        .populate("leaderboard.user","userName email")
        res.send(leaderboard)
    } catch (error) {
        res.send('An error occured')
    }

})

module.exports={quizRouter}
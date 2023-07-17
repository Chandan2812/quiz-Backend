const express=require("express")
const {connection}=require("./config/db")
const cors=require("cors")
const {userRouter}=require("./route/user.route")
const {quizRouter}=require("./route/quiz.route")

require("dotenv").config()


const app=express()

app.use(express.json())
app.use(cors())
app.use('/user',userRouter)
app.use("/quiz",quizRouter)



app.listen(process.env.PORT,async ()=>{
    try {
        await connection
        console.log("connected to DB")
    } catch (error) {
        console.log(error.message)
    }
    console.log("server is running")
})
const express = require("express")
const User = require("./models/user")
const cors = require("cors")
const app = express()
const mongoose=require("mongoose")
const userRouter = require('./routes/usersRouter')

const config = require('./utils/config')
const registerUser = require('./controllers/usersController')
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

mongoose.connect(config.MONGODB_URI)
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})

app.get("/",cors(),(req,res)=>{

})

app.use('/',userRouter)
app.post("/login",async(req,res)=>{
    const{username,password}=req.body

    try{
        const check=await User.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("User does not exit")
        }

    }
    catch(e){
        res.json("fail")
    }

})


app.listen(config.PORT,()=>{
    console.log(`Server running on port ${config.PORT}`);
})

module.exports = app
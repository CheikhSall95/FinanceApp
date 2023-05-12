const express = require("express")
const User = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/",cors(),(req,res)=>{

})


app.post("/",async(req,res)=>{
    const{email,password}=req.body

    try{
        const check=await collection.findOne({email:email})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")
    }

})



app.post("/Register",async(req,res)=>{
    const{username,email,password}=req.body

    const data={
        username:username,
        email:email,
        password:password
    }

    try{
        const check=await User.findOne({username:username})

        if(check){
            res.json("exist")
        }
        else{
            res.json("User does not exist")
            await User.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(3001,()=>{
    console.log("port connected");
})
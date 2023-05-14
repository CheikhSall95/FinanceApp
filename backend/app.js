const express = require('express')
const User = require('./models/user')
const cors = require('cors')
const app = express()
const userRouter = require('./routes/usersRouter')
const {errorHandler, notFound} = require('./middlewares/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/',cors(),(req,res)=>{

})

app.use('/',userRouter)
app.post('/login',async(req,res)=>{
    const{username,password}=req.body

    try{
        const check=await User.findOne({username:username})

        if(check){
            res.json('exist')
        }
        else{
            res.json('User does not exit')
        }

    }
    catch(e){
        res.json('fail')
    }

})
app.use(notFound)
app.use(errorHandler)


module.exports = app
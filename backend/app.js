const express = require('express')
const cors = require('cors')
const app = express()
const userRouter = require('./routes/usersRouter')
const incomeRouter = require('./routes/incomeRouter')
const expenseRouter = require('./routes/incomeRouter')
const {errorHandler, notFound} = require('./middlewares/errorMiddleware')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.get('/',cors(),(req,res)=>{

})

app.use('/api/users',userRouter)
app.use('/api/income',incomeRouter)
app.use('/api/expense',expenseRouter)
app.use(notFound)
app.use(errorHandler)


module.exports = app
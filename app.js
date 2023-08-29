
const express = require('express')
const app = express()
const router = require('./routers/studentRoute')
const userRouter = require('./routers/userRouter')
const AuthRouter = require('./routers/authRouter')
const morgan = require('morgan');



app.use(express.json())

if(process.env.NODE_ENV==='development'){
    console.log('development server');
    app.use(morgan('dev'));
}


app.use('/api/student',router);
app.use('/api/User',userRouter)
app.use('/api/auth',AuthRouter)

app.use('/',(req,res,next)=>{  
    console.log("this is a middlewere 2")
    next()
}) 

app.get('/',(req,res)=>{
    console.log(' middlewere gotten!')
    res.send('hello everyone')
    res.end()
})


module.exports = app
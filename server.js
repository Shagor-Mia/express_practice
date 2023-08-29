const dotenv = require('dotenv')
dotenv.config({path:'./config.env'})

const app  = require('./app')

const mongoose = require('mongoose')

// console.log(app.get('env')); // set by express
// console.log(process.env); // set by node

mongoose.connect('mongodb+srv://ShagorExpress:vBtJ7bk1OkSC7sKX@cluster0.yfvifjb.mongodb.net/?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology:true,
//     useCreateIndex:true
})
  .then((result) => {
   console.log('connected to mongodb successfully!') 
     })
  .catch((err) => {
    console.error("connection failed")
     });


const port = process.env.PORT;
 app.listen(port,()=>{
         console.log(`listening port on ${port}.....`)
     })     

     
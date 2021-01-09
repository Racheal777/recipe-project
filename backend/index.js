const express = require('express')

const app = express('')
const bodyParser=require("body-parser")
const mongoose=require('mongoose');

require('dotenv').config();


// router
const PostRouter = require('./routes/Postss')


const config ={
    useNewUrlParser:true,
    useUnifiedTopology: true

}


mongoose.connect(process.env.MONGODB_URI,() => {
    console.log("Successfully connected to MongoDB");
})

.catch(err => {
    console.error("Some problem occured",err)
})




// middlewares
// app.use(bodyParser())
app.use(bodyParser.json());
app.use('/postss',PostRouter);

const port = process.env.PORT

app.listen(port, () => {
    console.log(` app is listening at ${port}`)
  })
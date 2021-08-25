const express = require('express')
const app = express()

const router = require('./router')
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config()

const bodyParser=require('body-parser')


const optionsConnection = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
};

const mongoose=require("mongoose")
mongoose.connect(process.env.DB_CONNECT,optionsConnection)
.then(()=>{console.log("connected to db")})
.catch(error=>{console.log(`error connect db ${error}`)})

app.use(cors(), bodyParser.json(), router)
app.listen(process.env.PORT,
  () => console.log(`listening port ${process.env.PORT}`))



const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const userRoute =require('../routes/useRoute')
const connectDb = require('../config/dbConnection');
const dotEnv = require('dotenv').config();

const cors = require('cors');

// const corsOptions = 
app.use(cors({
  origin: 'http://localhost:3000',
 }))


connectDb();

const bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({message:"hi minaa"})
})


app.use("/api/users", userRoute);



module.exports = app;
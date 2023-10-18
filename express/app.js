const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const userRoute =require('../routes/useRoute')
const connectDb = require('../config/dbConnection');
const dotEnv = require('dotenv').config();
// const newRole = require('../objects/roleObj');
// const newUser = require('../objects/userObj');

connectDb();

const bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
    res.json({message:"hi minaa"})
})

// console.log("Role in app.js:", newRole);
// console.log("Role in app.js:", newUser);

app.use("/api/users", userRoute);
// app.use("/api/contact", require("../routes/contactRoutes"));
// app.use("/api/users", require("../routes/userRoute"));


module.exports = app;
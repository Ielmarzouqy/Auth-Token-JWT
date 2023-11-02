const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const userRoute = require('../routes/userRoute');
const roleRoute = require('../routes/roleRoute');
// const newRole = require('../objects/roleObj');


const connectDb = require('../config/dbConnection');
require('dotenv').config();

const cors = require('cors');



app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

connectDb();

const bodyParse = require('body-parser');
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json({ message: 'hi minaa' });
});

// console.log("Role in app.js:", newRole);


app.use('/api/users', userRoute);

app.use('/api/roles', roleRoute);


module.exports = app;

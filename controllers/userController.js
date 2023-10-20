const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer');
const { getMailOptions } = require('../util/mailer'); 
const jwtMiddleware = require('../Middleware/JWTMiddleware')
 const generateToken = require('../util/generateToken')
require('dotenv').config()

const registerUser = asyncHandler(async (req,res)=>{
    const {userName, email, password,passwordConfirmation, role,isEmailVerified } = req.body;
    if(!userName|| !email || !password || !passwordConfirmation || !role){
        res.status(404).json({message:"add all the infos"});
     
    }
    if (password !== passwordConfirmation) {
        res.status(400).json({ message: "Password and password confirmation do not match" });
        return;
      }
    const hashPwd = await bcrypt.hash(password, 10);

    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400).json({ message: "user already exist" });;
        
    }
    const newUser = new User({
        userName,
        email,
        password:hashPwd,
        passwordConfirmation,
        role,
        isEmailVerified
      });
    
      await newUser.save();

  const accessToken = generateToken({user : newUser.email})
  console.log(generateToken);

      const link=`http://localhost:3000/api/users/verify?token=${accessToken}`
      function verifyEmail(email,link){
      
        let transport = nodemailer.createTransport({
          host: "sandbox.smtp.mailtrap.io",
          port: 2525,
          auth: {
            user: "2f0433f9c00cb7",
            pass: "0a366ec0f2d833"
          }
        });

        const mailOptions = {
          from: 'vindication@enron.com',
          to: email,
          subject: 'Invoices due',
          text: 'Dudes, we really need your money.',
          html:   ` <h2>Hey ${email}</h2>
          <p>Here's the special magic link you requested:</p>
          
          <a href=${link}>Verify Account</a>

          <p>Please note that for added security this link becomes invalid after 45 minutes</p>
          <p>Stay Jiggy</p>`
        };
 
        transport.sendMail(mailOptions, function(error, info){
          if (error) {
          console.log(error);
          } else {
            console.log('Email sent: ' + info.response);
          }
        });
      }
      verifyEmail(req.body.email,link)
      res.status(201).json({
        message: "User registered successfully",
        user: {
          userName: newUser.userName,
          email: newUser.email,
          password:newUser.password,
        },
      });
})

 const verifyEmail = async(req, res) => {
  const token = req.query.token
  console.log(token);
  jwt.verify(token,
      process.env.ACCESS_TOKEN_SECERT,
      (err, decoded) => {
          if (err) {
              res.send("Unauthorized");
          }
          req.userId = decoded.id;
          res.send("email virefed");
      });
}

// const verifyEmail = async (req, res) => {
//   const token = req.query.token;
//   console.log(token);

//   jwtMiddleware(req, res, (err) => {
//     if (err) {
//       res.send("Unauthorized");
//       return;
//     }
//     // If the JWT is valid, you can access the user information through req.user.
//     req.userId = req.user.id;
//     res.send("Email verified");
//   });
// };


const loginUser = asyncHandler(async (req,res)=>{
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({message:"All fields are mandatory!"});
  }
  const user = await User.findOne({email})
if(user && (await bcrypt.compare(password, user.password))){

  const accessToken = generateToken({user : user.email})
  console.log(generateToken);

   res.status(200).json({message:"you are loged in successfully" ,accessToken})
}
})

const logoutUser = asyncHandler(async (req,res)=>{
  res.json({message:"loged out"})
})

module.exports = {registerUser, loginUser, logoutUser , verifyEmail }
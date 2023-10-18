const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')



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

      res.status(201).json({
        message: "User registered successfully",
        user: {
          userName: newUser.userName,
          email: newUser.email,
          password:newUser.password,
        },
      });
})

const loginUser = asyncHandler(async (req,res)=>{
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(400).json({message:"All fields are mandatory!"});
  }
  const user = await User.findOne({email})
if(user && (await bcrypt.compare(password, user.password))){
  const accessToken = jwt.sign(
    {
      user: {
        username: user.username,
        email: user.email,
        id: user.id,
      },
    },
    process.env.ACCESS_TOKEN_SECERT,
    { expiresIn: "10m" }
  
  );
   res.status(200).json({accessToken})

}

})

module.exports = {registerUser, loginUser}
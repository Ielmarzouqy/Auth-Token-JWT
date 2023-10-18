const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcryptjs');



const registerUser = asyncHandler(async (req,res)=>{
    const {userName, email, password,passwordConfirmation, role } = req.body;
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
        // throw new Error("Exist!")
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
    res.json({message:" register from controller"});

})

const loginUser = asyncHandler(async (req,res)=>{
    res.json({message:"login from controller"});

})

module.exports = {registerUser, loginUser}
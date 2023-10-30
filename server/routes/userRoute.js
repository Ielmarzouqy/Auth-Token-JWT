const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logoutUser , verifyEmail, forgetPassword, resetPassword} = require('../controllers/userController');
const JWTMiddleware = require("../Middleware/JWTMiddleware");

router.post('/register', registerUser)


router.post('/login',loginUser)

router.get('/logout',JWTMiddleware,logoutUser)

  
router.post('/curent',(req,res)=>{
    res.json({message:"curent user"})
})

router.get('/verify',verifyEmail);

router.post('/forgot-password',forgetPassword);
router.post('/reset-password/', resetPassword);




module.exports = router;
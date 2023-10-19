const express = require("express");
const router = express.Router();
const {registerUser, loginUser, logoutUser} = require('../controllers/userController');
const JWTMiddleware = require("../Middleware/JWTMiddleware");

router.post('/register', registerUser)


router.post('/login',loginUser)

router.get('/logout',JWTMiddleware,logoutUser)

  
router.post('/curent',(req,res)=>{
    res.json({message:"curent user"})
})

module.exports = router;
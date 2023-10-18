const express = require("express");
const router = express.Router();
const {registerUser, loginUser} = require('../controllers/userController');

router.post('/register', registerUser)


router.post('/login',loginUser)
  
router.post('/curent',(req,res)=>{
    res.json({message:"curent user"})
})

module.exports = router;
const jwt =require("jsonwebtoken")
const asyncHandler = require('express-async-handler')

function  generateToken(user){ 
    const token = jwt.sign(
        user,process.env.ACCESS_TOKEN_SECERT,{expiresIn:'10m'}
    )
    return token;
}

module.exports = generateToken
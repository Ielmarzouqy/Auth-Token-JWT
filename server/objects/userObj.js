const mongoose = require("mongoose");
const User = require("../models/userModel"); 
// module.exports = 
// const connectDb = require('../config/dbConnection');
// connectDb();
 
const newUser = new User({
    
        userName: "imanee",
        email: "imanee@gmail.com",
        password: "11223344",
        passwordConfirmation: "11223344",
        role: "652eaed73b243ebd24c2db86",

      
});

// Save the new role object to the database
newUser.save()
  .then(savedRole => {
    console.log("Role saved:", savedRole);
  })
  .catch(error => {
    console.error("Error:", error);
  });

  module.exports = newUser;

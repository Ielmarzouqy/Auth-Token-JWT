const mongoose = require("mongoose");
const Role = require("../models/roleModel"); 
// module.exports = 
// const connectDb = require('../config/dbConnection');
// connectDb();
 
const newRole = new Role({
  name: "client",
});

// Save the new role object to the database
newRole.save()
  .then(savedRole => {
    console.log("Role saved:", savedRole);
  })
  .catch(error => {
    console.error("Error:", error);
  });

  module.exports = newRole;

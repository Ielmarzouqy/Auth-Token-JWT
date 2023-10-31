const mongoose = require("mongoose");
const Role = require("../models/roleModel"); 

const newRole = new Role({
  name: "manager",
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

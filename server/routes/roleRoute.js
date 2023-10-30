const express = require("express");
const router = express.Router();

const { getRoles} = require('../controllers/userController');


router.get('/role',getRoles)

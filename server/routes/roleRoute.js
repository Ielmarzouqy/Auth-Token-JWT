const express = require('express');
const router = express.Router();

const getRoles = require('../controllers/roleController');

router.get('/role', getRoles);

module.exports = getRoles;

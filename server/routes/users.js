const express = require('express');
const mongoose = require('mongoose');

const userController = require('../controllers/userController.js');

const router = express.Router();

router.post('/create', 
    userController.createUser,
    (req, res) => {
        console.log("In the create user router!");
        return res.status(200).json({});
});

module.exports = router;
const express = require("express");
const userRoutes = express.Router();
const {
    registerUser, loginUser, getprofile
} = require("../controller/user.controller");
const {verifyToken} = require('../helpers/verifyToken');

userRoutes.post('/register', registerUser);
userRoutes.post('/login', loginUser);
userRoutes.get('/me', verifyToken, getprofile);

module.exports = userRoutes;
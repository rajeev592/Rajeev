const express = require('express');


const {getUser, registerUser, loginUser,} = require("../controllers/userController.js")

const userRoute = express.Router();

userRoute.post("/register", registerUser)

userRoute.post("/login", loginUser)

module.exports = {userRoute}
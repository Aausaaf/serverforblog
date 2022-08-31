const express = require('express');
const { createUser, loginUser, isLoggedIn, getUser} = require('../handlers/user');

const userRouter = express.Router();

userRouter.post('/createUser', createUser);
userRouter.post('/loginUser', loginUser);
userRouter.get('/isLoggedIn', isLoggedIn);
userRouter.post("/getuser",getUser)


module.exports = {userRouter};
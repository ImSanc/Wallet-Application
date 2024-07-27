const express = require('express');
const zod = require('zod');
const User = require('../db');
const jsonwebtoken = require('jsonwebtoken');
const jwtToken = require('../config')

const userRouter = express.Router();
userRouter.use(express.json())

const Schema = zod.object({
    username : zod.string().max(50,'User name can have 50 character').min(1,'User name should have 1 character'),
    password : zod.string().min(6,"Password should be of 6 letters").max(50,"Password can have 50 character"),
    firstName : zod.string().max(50,"First Name can have 50 character"),
    lastName : zod.string().max(50,"First Name can have 50 character")
})

userRouter.post("/signup", async (request,response)=> {
    console.log(req.body); // Add this line to log the request body
    const username = request.body.username;
    const password = request.body.password;
    const firstName = request.body.firstName;
    const lastName = request.body.lastName;

    const result = Schema.safeParse({username,password,firstName,lastName});

    if(result.error){
        response.status(411).json({message : "Email already taken / Incorrect inputs"})
    }

    const userExists = await User.fineOne(username);

    if(userExists){
        response.status(411).json({message : "Email already taken / Incorrect inputs"})
        return;
    }

    const newUser = new User(username,password,firstName,lastName);
    await newUser.save();
    
    const token = jsonwebtoken.sign(newUser,jwtToken);

    response.status(200).json({
        message: "User created successfully",
        token: token
    })

})

module.exports = userRouter;
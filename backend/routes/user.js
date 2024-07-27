const express = require('express');
const zod = require('zod');
const {User} = require('../db');
const jsonwebtoken = require('jsonwebtoken');
const {jwtToken} = require('../config')

const userRouter = express.Router();
userRouter.use(express.json())

const Schema = zod.object({
    username : zod.string().max(50,'User name can have 50 character').min(1,'User name should have 1 character'),
    password : zod.string().min(6,"Password should be of 6 letters").max(50,"Password can have 50 character"),
    firstName : zod.string().max(50,"First Name can have 50 character"),
    lastName : zod.string().max(50,"First Name can have 50 character")
})

userRouter.post("/signup", async (request,response)=> {
    const {username, password,lastName,firstName} = request.body;

    const result = Schema.safeParse({username,password,firstName,lastName});

    if(!result.success){
        response.status(411).json({message : result.error})
    }

    const userExists = await User.findOne({username : username});

    if(userExists){
        response.status(411).json({message : "Email already taken/Incorrect inputs" })
    }


    if(userExists){
        response.status(411).json({message : "Email already taken / Incorrect inputs"})
        return;
    }

    const newUser = await User.create({username,password,firstName,lastName});
    const userid = newUser._id;
    
    const token = jsonwebtoken.sign({newUser},jwtToken);

    response.status(200).json({
        message: "User created successfully",
        token: token
    })

})

module.exports = userRouter;
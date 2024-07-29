const express = require('express');
const zod = require('zod');
const {User} = require('../db');
const jsonwebtoken = require('jsonwebtoken');
const {jwtToken} = require('../config')
const {authMiddleWare} = require('../middleware');

const userRouter = express.Router();
userRouter.use(express.json())

const SignUpSchema = zod.object({
    username : zod.string().max(50,'User name can have 50 character').min(1,'User name should have 1 character'),
    password : zod.string().min(6,"Password should be of 6 letters").max(50,"Password can have 50 character"),
    firstName : zod.string().max(50,"First Name can have 50 character"),
    lastName : zod.string().max(50,"First Name can have 50 character")
})

const SignInSchema = zod.object({
    username : zod.string().max(50,'User name can have 50 character').min(1,'User name should have 1 character'),
    password : zod.string().min(6,"Password should be of 6 letters").max(50,"Password can have 50 character")
})

const updateSchema = zod.object({
    password : zod.string().min(6,"Password should be of 6 letters").max(50,"Password can have 50 character"),
    firstName : zod.string().max(50,"First Name can have 50 character"),
    lastName : zod.string().max(50,"First Name can have 50 character")
})



userRouter.post("/signup", async (request,response)=> {

    const {username, password,lastName,firstName} = request.body;

    const result = SignUpSchema.safeParse({username,password,firstName,lastName});
    if(!result.success){
       return  response.status(411).json({message : result.error})
    }

    const userExists = await User.findOne({username : username});
    if(userExists){
        return response.status(411).json({message : "Email already taken/Incorrect inputs" })
    }

    const newUser = await User.create({username,password,firstName,lastName});
    const token = jsonwebtoken.sign({newUser},jwtToken);

    return response.status(200).json({
        message: "User created successfully",
        token: token
    })

})

userRouter.post("/signin", async (request,response)=>{
    const {username,password} = request.body;

    const result = SignInSchema.safeParse(request.body);
    if(!result.success){
        return response.status(411).json({message : result.error});
    }

    const userExists = await User.findOne( {username,password});
    if(!userExists){
        return response.status(411).json({message: "Error while logging in"});
    }

    const token = jsonwebtoken.sign({username},jwtToken);
    return response.status(200).json({token: token}); 
})

userRouter.put("/updateUser", authMiddleWare, async (request,response)=>{
    const {username,password,lastName,firstName}  = request.body;

    const {success} = updateSchema.safeParse(request.body);
    if(!success){
        return response.status(404).send('User not found or data not modified');
    }
    console.log(username);
    const result = await User.updateOne({ username :username},{ $set: {password,lastName,firstName} });

    if(result.modifiedCount === 0){
        return response.status(404).send('User not found or data not modified');
    }
    
    return response.status(200).send("Updated successfully");
})

module.exports = userRouter;
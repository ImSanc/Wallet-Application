const express = require('express');
const zod = require('zod');
const {User,Account} = require('../db');
const jsonwebtoken = require('jsonwebtoken');
const {jwtToken} = require('../config')
const {authMiddleWare} = require('../middleware');

const userRouter = express.Router();

const SignUpSchema = zod.object({
    username : zod.string().email().max(50,'User name can have 50 character').min(1,'User name should have 1 character'),
    password : zod.string().min(6,"Password should be of 6 letters").max(50,"Password can have 50 character"),
    firstName : zod.string().max(50,"First Name can have 50 character"),
    lastName : zod.string().max(50,"First Name can have 50 character")
})

const SignInSchema = zod.object({
    username : zod.string().email().max(50,'User name can have 50 character').min(1,'User name should have 1 character'),
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

    const balance = parseInt(Math.random()*10000);

    await Account.create({ userId :newUser._id , balance});

    return response.status(200).json({
        message: "User created successfully",
        token: token,
        username : username
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
        return response.status(411).json({message: "User doesnt exist"});
    }

    const token = jsonwebtoken.sign({username},jwtToken);
    return response.status(200).json({
        token: token,
        username : username
    }); 
})

userRouter.put("/updateUser", authMiddleWare, async (request,response)=>{
    const {username,password,lastName,firstName}  = request.body;

    const zodParse = updateSchema.safeParse(request.body);
    if(!zodParse.success){
        return response.status(404).send(zodParse.error);
    }
    
    const result = await User.updateOne({ username :username},{ $set: {password,lastName,firstName} });

    if(result.modifiedCount === 0){
        return response.status(404).send('User not found or data not modified');
    }
    
    return response.status(200).send("Updated successfully");
})

userRouter.get("/bulk",authMiddleWare, async (request,response)=>{

    const filter = request.query.filter ? request.query.filter : '' 
    
    const users = await User.find( {$or: [{
        firstName: {
            "$regex": filter
        }
    }, {
        lastName: {
            "$regex": filter
        }
    }]})

    if(!users){
      return   response.status(401).json("Users not found");
    }

    return response.status(200).json( { Users : users.map( user => ({
        username: user.username,
        firstName: user.firstName,
        lastName : user.lastName } ) ) });
})

userRouter.get("/userDetails",authMiddleWare, async (request,response)=>{

    const username = request.headers.username;

    const user = await User.findOne({username});

    if(!user){
      return   response.status(401).json("Users not found");
    }

    return response.status(200).json( { user : {
        username : user.username,
        firstName : user.firstName,
        lastName : user.lastName,
    } });
})

module.exports = userRouter;
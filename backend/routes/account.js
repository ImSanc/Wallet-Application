
const express = require('express');
const { authMiddleWare } = require('../middleware');
const zod = require('zod');
const { User, Account } = require('../db');

const accountRouter = express.Router();

const balanceCheckSchema = zod.object({
    username : zod.string().max(50,'User name can have 50 character').min(1,'User name should have 1 character')
})

accountRouter.get("/balance", authMiddleWare, async(request,response)=>{
    
    const {success} = balanceCheckSchema.safeParse(request.body);

    if(!success){
      return  response.status(401).json("User not authorized");
    }
    
    const username = request.body.username;
    const user = await User.find({username});
    const userId = user[0]._id;

    const account = await Account.find({userId})

    if(account){
        return  response.status(200).json({balance : account[0].balance});
    }else
    {
        return  response.status(400).json("Something is up,Sorry");
    }

})

module.exports =  accountRouter;
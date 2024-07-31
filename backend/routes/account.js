
const express = require('express');
const { authMiddleWare } = require('../middleware');
const zod = require('zod');
const { User, Account } = require('../db');
const { default: mongoose } = require('mongoose');

const accountRouter = express.Router();

const balanceCheckSchema = zod.object({
    username : zod.string().max(50,'User name can have 50 character').min(1,'User name should have 1 character')
})

const transferSchema = zod.object({
    username : zod.string().max(50,'User name can have 50 character').min(1,'User name should have 1 character'),
    to : zod.string(),
    amount : zod.number().min(1,'Transfer amount should be atleast 1')
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

accountRouter.post("/transfer" ,authMiddleWare ,async (request,response) =>{
    const {success,error} = transferSchema.safeParse(request.body);
    if(!success){
        return response.status(400).json({message : error});
    }
    const session = await mongoose.startSession();
    session.startTransaction();

    try{
        
        const username = request.body.username;
        const user = await User.find({username}).session(session);
        const userId = user[0]._id;

        const toUsername = request.body.to;
        const toUser = await User.find({username : toUsername}).session(session);
        const amountToDeduct = request.body.amount;

        if(!toUser){
           return response.status(400).json({message : "Invalid account"});
        }
        const toUserID = toUser[0]._id;
       
        const userAccount = await Account.find({userId : userId}).session(session);
      
        const senderBalance = userAccount[0].balance;
       

        if( senderBalance< amountToDeduct){
            return response.status(400).json({message : "Insufficient balance"});
        }

       

        await Account.updateOne( {userId : userId }, {$inc : {
            balance : -amountToDeduct
        } }).session(session);
    
        await Account.updateOne({userId :toUserID }, {$inc : {
            balance : amountToDeduct
        } }).session(session);
    

        await session.commitTransaction();
        session.endSession();   
        return response.status(200).json({message : "Transfer successful"});
    }
    catch(error){
        await session.abortTransaction();
        session.endSession();
        return response.status(400).json({message : "Something is up, Transaction failed"});
    }

})


module.exports =  accountRouter;
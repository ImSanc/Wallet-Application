
const mongoose = require('mongoose');
const { databaseConnection } = require('./config.js');


mongoose.connect(databaseConnection);

const UserSchema = new mongoose.Schema({
    username : {
        type :String,
        required : true,
        trim : true,
        lowercase : true,
        maxLength : 50
    },
    password : {
        type : String,
        required : true,
        minLength : 6,
        maxLength : 50
    },
    firstName : {
        type :String,
        trim : true,
        lowercase : true,
        maxLength : 50
    },
    lastName : {
        type :String,
        trim : true,
        lowercase : true,
        maxLength : 50
    }
})

const User = mongoose.model('User',UserSchema);

const AccountSchema = new mongoose.Schema({
    userId : {type : mongoose.Schema.Types.ObjectId , ref : 'User' ,required : true},
    balance : { type : Number , required : true}
})

const Account = mongoose.model('Acount',AccountSchema);

module.exports ={
    User,
    Account
};
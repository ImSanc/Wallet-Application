
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://Sanchit:sanchit%4017@cluster0.8djn6b3.mongodb.net/paytm');

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

module.exports ={
    User
};
const jsonwebtoken = require("jsonwebtoken")
const {jwtToken} = require("./config.js")

function  authMiddleWare( request,response,next)
{
    const {authorization} = request.headers;

    if(!authorization){
        return response.status(401).json({message : "Authorization header is missing"})
    }

    const token = authorization.split(' ')[1];

    if(!token){
        return response.status(401).json({message : "Authorization header is missing"})
    }
    try{
    const decoded = jsonwebtoken.verify(token,jwtToken); 
    
    if(decoded.username){
    request.body.username = decoded.username;
    }
    next();
    }
    catch (err){
        return response.status(403).json({message : "Not Authorized"});
    }


}

module.exports = {authMiddleWare}
const jsonwebtoken = require("jsonwebtoken")
const {jwtToken} = require("./config.js")

function  authMiddleWare( request,response,next)
{
    console.log("middleware");
    const {authorization} = request.headers;
    console.log(authorization);
    if(!authorization){
        console.log("1");
        return response.status(401).json({message : "Authorization header is missing"})
    }

    const token = authorization.split(' ')[1];

    if(!token){
        console.log("2");
        return response.status(401).json({message : "Authorization header is missing"})
    }


    console.log(jwtToken);
    const decode = jsonwebtoken.verify(token,jwtToken);

    console.log(decode);
    next();
}

module.exports = {authMiddleWare}
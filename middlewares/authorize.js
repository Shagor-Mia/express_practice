const jwt = require('jsonwebtoken');

module.exports = function(req,res,next){

    //get the token from request header

 // authorization : Bearer <token>
 let token=(req.header('Authorization'))
 if(!token)res.status(401).send("access denied! No token provided.")
 token = token.split(" ")[1].trim();

    // verify the token

try {

   const decoded = jwt.verify(token,process.env.MysecretKey)
   req.user = decoded
   next();
}
catch (error) {
    return res.status(400).send("invalid token")
}

    //Error message
}
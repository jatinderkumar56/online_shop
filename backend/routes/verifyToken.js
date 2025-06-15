const jwt = require('jsonwebtoken');





const verifytoken = (req, res, next) => {
    const authHeader = req.headers.token;
    // console.log("Received Token =>", authHeader);
   
// console.log("Current Time =>", Math.floor(Date.now() / 1000));
    if (!authHeader) {
        console.log("No Token Found");
      }
      if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.JWT_SEC, (err, user) => {
          if (err) {
            // console.log("JWT Error:", err);
            return res.status(403).json("Token is not valid!"); // Fix Here
          }
       
          
          req.user = user;
        
          next();
        });
    
    } else {
      return res.status(401).json("You are not authenticated!");
    }
  };
 // this function just check the id of user or is check user are admin
 const verifyTokenAndAuthentication = (req,res,next)=>{
    verifytoken(req,res,()=>{
        if(req.user.id == req.params.id || req.user.isAdminn){
            next()
        }else{
            res.status(401).json('You are not allow to do it')
        }
    })
 }
 const verifyTokenAndAdmin = (req,res,next)=>{
    verifytoken(req,res,()=>{
        if(req.user.isAdmin){
            next()
        }else{
            res.status(401).json('You are not a Admin')
        }
    })
 }
module.exports = {verifytoken,verifyTokenAndAuthentication,verifyTokenAndAdmin};
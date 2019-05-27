const jwt = require('jsonwebtoken');
const User = require('../models/users');

const authenticate = (req,res,next)=>{
    const token = req.header('x-auth');
    if(!token){
        res.status(401).send({message:'Authentication needed \n No token provided'});
    }
    console.log(token+"nnnnn");
    User.findByToken(token).then((user)=>{
        if(!user){
            throw new Error('Authentication needed \n Not a user');
        }
        req.user = user
        req.token = token
        next()
    }).catch(e=>{
        res.status(401).send({message:e.message});
    })
}

module.exports=authenticate;
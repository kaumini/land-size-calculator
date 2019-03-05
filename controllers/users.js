 const express =  require('express');
 const mongoose = require('../db/db');
 const User = require('../models/users');
 const uuidv1 = require('uuid/v1');

 const router = express.Router();


// exports.addUser = (req, res) => {
//     var generatedUid = uuidv1();

//     let user = new userInfo({
//         uid: generatedUid,
//         name: req.body.name,
//         email: req.body.email,
//         password: req.body.password,
//         premium: req.body.premium
//     });
//     user.save(function (err){
//         if(err){
//             let msg = {
//                 success : false,
//                 msg : err
//             }
//             res.status(500).json(msg);
//         }
//         else{
//             //save to login details
//             var password = req.body.password;
//             const saltRounds = 10;
        
//             bcrypt.hash(password, saltRounds).then(function(hash) {
//                 let user_login = new loginInfo({
//                     email : req.body.email,
//                     uid : generatedUid,
//                     password :hash,
//                     approvalStatus : "pending",
//                     user_type : req.body.user_type
//                 });
        
//                 user_login.save(function (err){
//                     if(err){
//                         let msg = {
//                             success : false,
//                             msg : err
//                         }
//                         res.status(500).json(msg);
//                     }
//                     else{
//                         let msg = {
//                             success : true,
//                             msg : "success"
//                         }
//                         res.status(200).json(msg);
//                     }
//                 });
//             });
//         }
//     });


// }

// get users
module.exports.getUsers = function(callback, limit){
 	Users.find(callback).limit(limit);
};

// Add user
module.exports.addUser = function(user, callback){
	Users.create(user, callback);
};

// get userDetails
module.exports.getUsersById = function(id, callback){
	Users.findById(id, callback);
};

// Update user
module.exports.updateUser = function(id, user, options, callback){
	var query = {_id: id};
	var update = {
		uid: user.uid,
		name: user.name,
		email: user.email,
		password: user.password,
		premium: user.premium
	}
	Users.findOneAndUpdate(query, update, options, callback);
};
module.exports.deleteUser = function(id, callback){
	var query = {_id: id};
	Users.remove(query, callback);
};
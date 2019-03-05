 const user_info = require('../models/users');
 const uuidv1 = require('uuid/v1');
 const bcrypt = require('bcrypt');
 const express = require("express");

 const router = express.Router();


// get user_info
// module.exports.getuser_info = function(callback, limit){
//  	user_info.find(callback).limit(limit);
// };

// Add user
// module.exports.addUser = function(user, callback){
// 	user_info.create(user, callback);
// };

exports.addUser = (req, res) => {
	//save user document
	let user = new user_info({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password,
		premium: req.body.premium
	});
	user.save(function (err){
        if(err){
            let msg = {
                success : false,
                msg : err
            }
            res.status(500).json(msg);
		}
		else{
			let msg = {
				success : true,
				msg : "success"
			}
			res.status(200).json(msg);
		}
        
	});
};

// // get userDetails
// module.exports.getuser_infoById = function(id, callback){
// 	user_info.findById(id, callback);
// };

// // Update user
// module.exports.updateUser = function(id, user, options, callback){
// 	var query = {_id: id};
// 	var update = {
// 		uid: user.uid,
// 		name: user.name,
// 		email: user.email,
// 		password: user.password,
// 		premium: user.premium
// 	}
// 	user_info.findOneAndUpdate(query, update, options, callback);
// };
// module.exports.deleteUser = function(id, callback){
// 	var query = {_id: id};
// 	user_info.remove(query, callback);
// };
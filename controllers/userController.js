 const user_info = require('../models/users');
 const uuidv1 = require('uuid/v1');
 const bcrypt = require('bcrypt');
 const express = require("express");
 const jwt = require('jsonwebtoken');
 const  {secret} = require("../env_config");

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
	var generatedUid=uuidv1();
	let hash = bcrypt.hashSync(req.body.password, 10);
	
	//save user document
	let user = new user_info({
		uid : generatedUid,
		name: req.body.name,
		email: req.body.email,
		password: hash,
		premium: false,
		tries: 0
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

exports.loginUser = (req, res) => {
	let loginPassword = req.body.password;
	
	user_info.findOne({ name : req.body.name }, (err, user) => {
		if (err) {
			let msg = {
				success : false,
				msg : err
			}
			res.status(500).json(msg);
		}
		else {
			if(user) {
				let uid = user.uid;
				if (bcrypt.compareSync(loginPassword, user.password)) {
					jwt.sign({uid: user.uid}, 'shhhhh', (err, token) => {
						if (err) {
							let msg = {
								success : false,
								msg : "whatever"
							}
							res.status(401).json(msg);
						} 
						else {
							let msg = {
								success : true,
								tries: user.tries,
								msg : [uid, token,user]
							}
							res.status(200).json(msg);
						}
					});
				}
				else {
					let msg = {
						success : false,
						msg : "invalid email/password"
					}
					res.status(401).json(msg);
				}
			}
			else {
				msg = {
					success : false,
					msg : "User not found"
				}
				res.status(401).json(msg);
			}
		}
	});
}

exports.verifyUser = (req, res) => {
	jwt.verify(req.body.token, 'shhhhh', (err, authorizedData) => {
		if(err){
			//if error 
			let msg = {
				success : false,
				msg : "not allowed", err
			}
			res.status(403).json(msg);
		}
		else {
			//if token is verified
			let msg = {
				success : true,
				msg : authorizedData
			}
			res.status(200).json;
		}
	});
}

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
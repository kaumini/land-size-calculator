const calculation_info = require('../models/calculations');
const User = require('../models/users');
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');
const express = require("express");
const jwt = require('jsonwebtoken');
const  {secret} = require("../env_config");

const router = express.Router();

exports.saveCalculation = (req, res) => {
	console.log(req.body.coordinates);

	//save user calculation
	let data = new calculation_info({
		uid : req.body.uid,
		coordinates: req.body.coordinates,
		area: req.body.area
	});
	console.log(data);
	data.save(async function (err){
        if(err){
            let msg = {
                success : false,
                msg : err
            }
            res.status(500).json(msg);
		}
		else{
			// let msg = {
			// 	success : true,
			// 	msg : "success"
			// }
			// res.status(200).json(msg);
			const uid = req.body.uid;
			const user= await User.findOne({uid:req.body.uid});
			const token = await jwt.sign({uid: user.uid}, 'shhhhh').toString();
			console.log(token);
			let msg = {
				success : true,
				msg : [uid, token,user]
			}
			console.log(msg);
			res.status(200).json(msg);
		}
        
	});

};

exports.getCalculations = (req, res) => {
	console.log(req.body);
	calculation_info.find({}).exec(function(err, calculations){
		if(err){
			let msg = {
                success : false,
                msg : err
            }
            res.status(500).json(msg);
		}else{
			res.json(calculations);
		}
	});
};

exports.updateTries = async (req, res) => {
	// db.collection("customers").updateOne({uid:_uid}, {$set: {tries:_tries}}, function(err, res) {
	// 	if (err) throw err;
	// 	console.log("1 document updated");
	// 	db.close();
	//   });
	const tries = req.body.tries;
	const uid = req.body.uid;
	console.log(tries);
	const user= await User.findOne({uid:req.body.uid});
	user.tries = tries;
	let msg = {	
		success : true,
	}
	await user.save();
	res.status(200).json(msg);
};
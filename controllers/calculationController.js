const calculation_info = require('../models/calculations');
const User = require('../models/users');
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');
const express = require("express");
const jwt = require('jsonwebtoken');

const router = express.Router();

exports.saveCalculation = (req, res) => {
	//save user calculation
	let data = new calculation_info({
		uid : req.body.uid,
		coordinates: req.body.coordinates,
		area: req.body.area
	});
	data.save(async function (err){
        if(err){
            let msg = {
                success : false,
                msg : err
            }
            res.status(500).json(msg);
		}
		else{
			const user= await User.findOne({uid:req.user.uid});
			let msg = {	
				success : true,
			}
			if(!user.premium){
				user.tries = user.tries+1;
				await user.save();
				res.status(200).json(msg);
			}else{
				res.status(200).json(msg);
			}
			
			
		}
        
	});

};

exports.getCalculations = (req, res) => {
	console.log(req.user);
	calculation_info.find({uid:req.user.uid}).exec(function(err, calculations){
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
	const user= await User.findOne({uid:req.user.uid});
	user.tries = tries;
	let msg = {	
		success : true,
	}
	await user.save();
	res.status(200).json(msg);
};
const calculation_info = require('../models/calculations');
const user_info = require('../models/users');
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
	data.save(function (err){
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

exports.updateTries = (req, res) => {
	_uid = req.body.uid;
	_tries = req.body.tries;
	// db.collection("customers").updateOne({uid:_uid}, {$set: {tries:_tries}}, function(err, res) {
	// 	if (err) throw err;
	// 	console.log("1 document updated");
	// 	db.close();
	//   });
	user_info.update({uid:_uid}, {$set: {tries:_tries}});
	res.json({
		success : true,
		message : "Payment Done"
	})
};
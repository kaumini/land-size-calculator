const user_info = require('../models/users');
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');
const express = require("express");
const jwt = require('jsonwebtoken');
const  {secret} = require("../env_config");

const stripe = require('stripe')('sk_test_v7gXLbxH1k5vgaJ9JCeXZVNf00O3LZBWs3');

const router = express.Router();

exports.pay = (req, res) => {
    console.log('This body is ', req.body);
    console.log(req.body.uid);
    var charge = stripe.charges.create({
        amount: 500,
        currency: 'gbp',
        source: req.body.token
    },(err,charge) => {
        if(err){
            throw err;
        }
        console.log(req.body.uid);
        user_info.update({name:req.body.uid}, {$set: {premium:true}});
        res.json({
            success : true,
            message : "Payment Done"
        })
    });
};
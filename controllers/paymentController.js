const User = require('../models/users');
const uuidv1 = require('uuid/v1');
const bcrypt = require('bcrypt');
const express = require("express");
const jwt = require('jsonwebtoken');
const  {secret} = require("../env_config");

const stripe = require('stripe')('sk_test_v7gXLbxH1k5vgaJ9JCeXZVNf00O3LZBWs3');

const router = express.Router();

exports.pay =async (req, res) => {
    var charge = stripe.charges.create({
        amount: 500,
        currency: 'gbp',
        source: req.body.token
    },async (err,charge) => {
        if(err){
            res.json({

            })
        }
        const uid = req.body.uid;
        const user= await User.findOne({uid:req.body.uid});
        user.premium = true;
        user.tries = 0;
        const token = await jwt.sign({uid: user.uid}, 'shhhhh').toString();
        console.log(token);
        // let msg = {
        //     success : true,
        //     token : [uid, token,user]
        // }
        user.save();
        let msg = {
            success : true,
            msg : [uid, token,user]
        }
        console.log(msg);

        const user1= await User.findOne({uid:req.body.uid});
        console.log(user1);
        res.status(200).json(msg);
    });
};
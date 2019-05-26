const express = require('express');
const router = express.Router();
const Payments = require ('../controllers/paymentController.js');
const passport = require('passport');

router.post('/buy',async (req,res)=>{
    console.log('payment done');
    await Payments.pay(req,res);
});

module.exports = router;
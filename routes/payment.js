const express = require('express');
const router = express.Router();
const Payments = require ('../controllers/paymentController.js');
const passport = require('passport');

router.post('/buy',(req,res)=>{
    console.log('payment done');
    return Payments.pay(req,res);
});


module.exports = router;
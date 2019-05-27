const express = require('express');
const router = express.Router();
const Payments = require ('../controllers/paymentController.js');
const auth = require('../middleware/auth');

router.post('/buy',auth,async (req,res)=>{
    console.log('payment done');
    await Payments.pay(req,res);
});

module.exports = router;
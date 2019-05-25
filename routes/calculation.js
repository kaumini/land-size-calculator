const express = require('express');
const router = express.Router();
const Calculations = require ('../controllers/calculationController.js');
const passport = require('passport');

router.post('/saveCalculation', (req, res) => {
    Calculations.saveCalculation(req, res);
});

router.post('/updateTries', (req, res) => {
    Calculations.updateTries(req, res);
});

module.exports = router;

router.get('/getCalculations', (req, res) => {
    Calculations.getCalculations(req, res);
});


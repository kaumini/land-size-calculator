const express = require('express');
const router = express.Router();
const Calculations = require ('../controllers/calculationController.js');
const auth = require('../middleware/auth');

router.post('/saveCalculation',auth,async (req, res) => {
    Calculations.saveCalculation(req, res);
});

router.post('/updateTries',auth,async (req, res) => {
    Calculations.updateTries(req, res);
});

module.exports = router;

router.get('/getCalculations',auth, (req, res) => {
    Calculations.getCalculations(req, res);
});


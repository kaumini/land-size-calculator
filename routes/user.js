const express = require('express');
const router = express.Router();
const Users = require ('../controllers/userController.js');
const passport = require('passport');

router.post('/createUsers',(req,res)=>{
    console.log('done');
    return Users.addUser(req,res);
});

module.exports = router;
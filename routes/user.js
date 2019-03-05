const express = require('express');
const router = express.router();
const Users = require ('../controllers/users.js');
const passport = require('passport');

router.post('/api/users',(req,res)=>{
    console.log('done');
    return Users.addUser(req,res);
});

module.exports = router;
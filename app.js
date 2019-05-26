//const stripeSecretKey = process.env.STRIPE_SECRET_KEY


var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan')

app.use(express.static('F:/CSE ACA/my stuff/Semester 5/Software Engineering Project/project_calculator/client'));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'));


Calculations = require('./models/calculations');
Users = require('./models/users');

//connect to mongoose
mongoose.connect('mongodb://localhost/landcalculator');
var db = mongoose.connection;
app.listen(3000);
console.log('Running on port 3000....'); 

const user = require('./routes/user.js');
const payment = require('./routes/payment.js');
const calculation = require('./routes/calculation.js');

app.use('/user',user);
app.use('/payment',payment);
app.use('/calculation',calculation);


// app.get('/', function(req, res){
// 	res.send('Please use /api/users');
// });


// app.get('/api/calculations', function(req, res){
// 	Calculations.getCalculations(function(err, calculations){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(calculations);
// 	});
// });

// app.get('/api/calculations/:_id', function(req, res){
// 	Calculations.getCalculationsById(req.params._id, function(err, calculations){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(calculations);
// 	});
// });

// app.get('/api/users', function(req, res){
// 	Users.getUsers(function(err, users){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(users);
// 	});
// });

// app.post('/api/users', function(req, res){
// 	var user = req.body;
// 	console.log(user);
// 	Users.addUser(user, function(err, user){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(user);
// 	});
// });

// app.post('/api/calculations', function(req, res){
// 	var calculation = req.body;
// 	Calculations.addCalculation(calculation, function(err, user){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(calculation);
// 	});
// });

// app.get('/api/users/:_id', function(req, res){
// 	Users.getUsersById(req.params._id, function(err, user){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(user);
// 	});
// });

// app.post('/api/users', function(req, res){
// 	var user = req.body;
// 	Users.addUser(user, function(err, user){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(user);
// 	});
// });

// app.put('/api/users/:_id', function(req, res){
// 	var id = req.params._id;
// 	var user = req.body;
// 	Users.updateUser(id, user, {}, function(err, user){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(user);
// 	});
// });

// app.delete('/api/users/:_id', function(req, res){
// 	var id = req.params._id;
// 	Users.deleteUser(id,  function(err, user){
// 		if(err){
// 			throw err;
// 		}
// 		res.json(user);
// 	});
// });



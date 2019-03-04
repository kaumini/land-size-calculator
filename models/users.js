const mongoose = require('mongoose');

//Book Schema
const collectionSchema = mongoose.Schema({
	uid:{
		type: Number,
		required: true
	},
	name:{
		type: String,
		required: true
	},
	email:{
		type: String,
		required: true
	},
	password:{
		type: String,
		required: true
	},
	premium:{
		type: Boolean,
		required: true
	}
});

const Users = module.exports = mongoose.model('users', collectionSchema);

// get users
module.exports.getUsers = function(callback, limit){
	Users.find(callback).limit(limit);
};

// Add user
module.exports.addUser = function(user, callback){
	Users.create(user, callback);
};

// get userDetails
module.exports.getUsersById = function(id, callback){
	Users.findById(id, callback);
};

// Update user
module.exports.updateUser = function(id, user, options, callback){
	var query = {_id: id};
	var update = {
		uid: user.uid,
		name: user.name,
		email: user.email,
		password: user.password,
		premium: user.premium
	}
	Users.findOneAndUpdate(query, update, options, callback);
};
module.exports.deleteUser = function(id, callback){
	var query = {_id: id};
	Users.remove(query, callback);
};
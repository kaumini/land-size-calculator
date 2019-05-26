const mongoose = require('mongoose');

//Book Schema
const collectionSchema = mongoose.Schema({
	uid:{
		type: String,
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
	},
	tries:{
		type: Number,
		required: true
	}
});


const Users = module.exports = mongoose.model('users', collectionSchema);

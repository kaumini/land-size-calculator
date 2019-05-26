const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

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

collectionSchema.statics.findByToken = function (token) {
    const User = this
    let decoded

    try {
		decoded = jwt.verify(token, 'shhhhh');
    } catch (e) {
        return Promise.reject(e)
    }

    return User.findOne({
        uid: decoded.uid
    })
}


const Users = module.exports = mongoose.model('users', collectionSchema);

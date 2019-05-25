var mongoose = require('mongoose');

//Collection Schema
var collectionSchema = mongoose.Schema({
	uid:{
		type: String,
		required: true
	},
	coordinates: {},
	area:{
		type: Number,
		required: true
	}
});

var Calculation = module.exports = mongoose.model('calculations', collectionSchema);
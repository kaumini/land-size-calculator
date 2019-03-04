var mongoose = require('mongoose');

//Collection Schema
var collectionSchema = mongoose.Schema({
	user:{
		type: String,
		required: true
	},
	UCNo:{
		type: Number,
		required: true
	},
	lat:{
		type: Number,
		required: true
	},
	lgt:{
		type: Number,
		required: true
	}
});

var Calculator = module.exports = mongoose.model('calculations', collectionSchema);

// get calculations
module.exports.getCalculations = function(callback, limit){
	Calculator.find(callback).limit(limit);
};

// get userCalculations
module.exports.getCalculationsById = function(id, callback){
	Calculator.findById(id, callback);
};

// Add calculation
module.exports.addCalculation = function(calculation, callback){
	Calculator.create(calculation, callback);
};

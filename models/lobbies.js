var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var lobbySchema = new Schema({
	name: {type:String, unique:true, required: true},
	isPublic: {type: Boolean, default: false},
	showAnswersToOthers: {type: Boolean, default: true},
	host: {
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	users: [{
		type: Schema.Types.ObjectId,
		ref: 'User'
	}],
	isAnonymous: {type: Boolean, default: false},
	allowAnonymous: {type: Boolean, default: false},
	currentQuestion: {type: String},
	currentResponses: [{type: String}],
	createdOn: {type: Date, default: Date.now()}
});
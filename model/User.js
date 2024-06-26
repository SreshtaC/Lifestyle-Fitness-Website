// Filename - model/User.js

const mongoose = require('mongoose')
const Schema = mongoose.Schema
// const passportLocalMongoose = require('passport-local-mongoose');
var User = new Schema({
	name: {
		type:String
	},
	email: {
		type: String,
	},
	phNo: {
		type:String
	},
	username: {
		type: String
	},
	password: {
		type: String
	},
	confpass: {
		type: String
	}
})

// User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User)

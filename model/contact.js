const mongoose = require('mongoose')
const Schema = mongoose.Schema
var Msg = new Schema({
	name: {
		type:String
	},
	email: {
		type: String
	},
	sub: {
		type:String
	},
	msg: {
		type: String
	}
})


module.exports = mongoose.model('Msg', Msg)
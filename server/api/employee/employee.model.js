var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var employeeSchema = new mongoose.Schema({
	
	first_name: {
		type: String,
		required: true
	},
	
	last_name: {
		type: String,
		required: true
	},
	
	client: {
		type: String,
		required: true
	},
	
	skill: {
		type: String,
		required: true
	},
	
	recruiter: {
		type: String,
		required: true
	},
	
	placement_type: {
		type: String,
		required: true
	},
	
	insurance: {
		type: Number,
		required: true
	},
	
	relocation: {
		type: Number,
		required: true
	},
	
	immigration: {
		type: Number,
		required: true
	},
	
	pay_vacation_cost: {
		type: Number,
		required: true
	},
	
	ksquare_hourly_cost: {
		type: Number,
		required: true
	},
	
	target_bill_rate: {
		type: Number,
		required: true
	},
	
	client_bill_pay: {
		type: Number,
		required: true
	},
	
	activate: {
		type: Boolean,
		required: true
	},
		
})
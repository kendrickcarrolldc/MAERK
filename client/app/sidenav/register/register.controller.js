(function () {
	'use strict';

	angular.module('maerkApp')

	.controller('registerController', function (EmployeeFact) {
		
		this.employeeList = EmployeeFact.employeeList;
		console.log(this.employeeList);
		
		this.month = ["January", "February", "March"];
		
		this.year = [2014, 2015, 2016];
		
//		this.report = {
//			year: {
//				type: Number,
//				required: true
//			},
//			
//			january: [employeeSchema],
//			february: [employeeSchema],
//			march: [employeeSchema],
//			april: [employeeSchema],
//			may: [employeeSchema],
//			june: [employeeSchema],
//			july: [employeeSchema],
//			august: [employeeSchema],
//			september: [employeeSchema],
//			october: [employeeSchema],
//			november: [employeeSchema],
//			december: [employeeSchema]
//
//		}
		

	});
})();
(function () {
	'use strict';

	angular.module('maerkApp')

	.controller('registerController', function (EmployeeFact) {
		
		this.employeeList = EmployeeFact.employeeList;
		console.log(this.employeeList);
		
		this.month = ["January", "February", "March"];
		
		this.year = [2014, 2015, 2016];

	});
})();
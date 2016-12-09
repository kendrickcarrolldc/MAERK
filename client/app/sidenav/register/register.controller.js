(function () {
	'use strict';

	angular.module('maerkApp')

	.controller('registerController', function (EmployeeFact, ReportFact, $q) {

		this.q = $q;
		
		
		this.employeeList = EmployeeFact.employeeList;
//		console.log(this.employeeList[1]);

		this.reportList = ReportFact.reportList;
		console.log(this.reportList[0]);

		this.months = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"];

		this.monthSelect = function (month) {

			for (var key in this.reportList) {
				month = key
				for (var i=0; i < this.months.length; i++) {
				if (this.months[i] === month) {
					month = this.months[i]
				}
				}
			}
					return month


		}
		
		
		
		console.log(this.monthSelect())
//		this.monthSelect();
		



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
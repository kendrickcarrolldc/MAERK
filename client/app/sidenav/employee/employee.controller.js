(function () {
	'use strict';

	angular.module('maerkApp')
		.controller('employeesController', function ($scope, $mdToast, EmployeeService) {

//		var that = this;
//		EmployeeService.get({id: 1}, function(data) {
//			$scope.post = data;
//		})
		
//		that.employeeList = EmployeeService.query();
			$scope.employeeList = [
				{
					id: 1,
					name: 'Kendrick Carroll',
					client: 'Verizon',
					skills: 'UI/UX Designer',
					sales: 15,
					recruiter: 'Chris Young',
					revenue: 1000
            },
				{
					id: 2,
					name: 'Anish',
					client: 'Sabre',
					skills: 'UI/UX Designer',
					sales: 15,
					recruiter: 'Chris Young',
					revenue: 1000
            },
				{
					id: 3,
					name: 'Alisha',
					client: 'I dont know',
					skills: 'cook',
					sales: 15,
					recruiter: 'Home',
					revenue: 1000
            },
				{
					id: 4,
					name: 'Luis',
					client: 'Ksquare',
					skills: 'UI/UX Designer',
					sales: 15,
					recruiter: 'rocky',
					revenue: 1000
					},
				{
					id: 4,
					name: 'Luis',
					client: 'Ksquare',
					skills: 'UI/UX Designer',
					sales: 15,
					recruiter: 'rocky',
					revenue: 1000
					},
				{
					id: 4,
					name: 'Luis',
					client: 'Ksquare',
					skills: 'UI/UX Designer',
					sales: 15,
					recruiter: 'rocky',
					revenue: 1000
					}
					
			
			$scope.selectedEmployee = {id: Number, name: String, client: String};
		});
}());
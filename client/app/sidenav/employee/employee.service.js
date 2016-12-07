'use strict';

(function () {

	angular.module('maerkApp')
		.factory('EmployeeFact', function ($resource, $mdDialog) {

			var employeeResource = $resource('/api/employee/:id/:controller', {
				id: '@_id'
			}, {

				get: {
					method: 'GET',
					params: {
						id: '@_id'
					}
				},
				create: {
					method: 'POST',
				},
				update: {
					method: 'POST',
				}

			});

			var employeeList = employeeResource.query();

			return {
				employeeList: employeeList,
				employeeResource: employeeResource,
				

				create: function (emp) {
					new employeeResource(emp).$save().then(function (newHire) {
						employeeList.push(newHire);
//						editedEmp = null;
					})
				},
				update: function (editedEmp) {
					editedEmp.$save().then(function (emp) {
						console.log(emp);
						for (var i = 0; i < employeeList.length; i++) {
							if (employeeList[i]._id === emp._id) {
								employeeList[i] = emp;
							}
						}
					})

				}

			}
		});
})();

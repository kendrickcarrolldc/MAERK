'use strict';

(function() {

	angular.module('maerkApp.auth')
    .factory('EmployeeFact', function($resource, $mdDialog) {
		
	var employeeResource = $resource('/api/employee/:id/:controller', {id: '@_id'}, {
      
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
        method: 'PUT',
      }
		
    });
		
//	$scope.EmployeeOne = Employee.get({id: '@_id'}
	
	var employeeList = employeeResource.query();	
		
	return {
		employeeList: employeeList,
		employeeResource: employeeResource,
		
		create: function (emp) {
			new employeeResource(emp).$save().then(function(newHire){
				employeeList.push(newHire);
				
				
				
			})
		}
		
		
	}
	});
})();
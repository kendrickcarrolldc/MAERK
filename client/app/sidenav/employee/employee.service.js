'use strict';

(function() {

  function EmployeeResource($resource) {
    return $resource('/sidenav/employee/:id/:controller', {id: '@_id'}, {
      
					
					EmployeeService.query(function(data) {
					$
				})
      get: {
        method: 'GET',
        params: {
          id: 'me'
        }
      },
					
					 save: {
        method: 'POST',
        params: {
          id: 'me'
        }
      },
					
					 query: {
        method: 'GET',
        params: {
          id: 'me'
        }
      },
					
					 remove: {
        method: 'DELETE',
        params: {
          id: 'me'
        }
      },
					
					 delete: {
        method: 'DELETE',
        params: {
          id: 'me'
        }
      }
    });
  }

  angular.module('maerkApp.auth')
    .factory('EmployeeService', EmployeeResource);
})();
'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
<<<<<<< Updated upstream
      url: '/',
      template: '<main class="flex layout column"></main>'
=======
      url: '/dashboard',
      template: '<main class="flex layout column"></main>',
			authenticate: true,
			abstract:true
>>>>>>> Stashed changes
    })
	
	.state('main.employees', {
			url: '/employees',
			templateUrl: 'app/sidenav/employee/employee.html',
			controller: 'employeesController',
			controllerAs: 'vm'
//			authenticate: true
		})
  });

  
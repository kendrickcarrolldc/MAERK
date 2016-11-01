'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/dashboard',
      template: '<main class="flex layout column"></main>',
			authenticate: true,
			abstract:truegi
    })
	
	.state('main.employees', {
			url: '/employees',
			templateUrl: 'app/sidenav/employee/employee.html',
			controller: 'employeesController',
			controllerAs: 'vm'
//			authenticate: true
		})
  });

  
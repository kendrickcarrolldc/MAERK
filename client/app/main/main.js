'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      template: '<main class="flex layout column"></main>'
    })
	
	.state('main.employees', {
			url: '/employees',
			templateUrl: 'app/sidenav/employee/employee.html',
			controller: 'employeesController',
			controllerAs: 'vm'
//			authenticate: true
		})
  });

  
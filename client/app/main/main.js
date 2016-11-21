'use strict';

angular.module('maerkApp')
  .config(function($stateProvider) {
   
	
	$stateProvider.state('main', {
      url: '/dashboard',
      template: '<main flex layout="row"></main>',
			authenticate: true,
			abstract:true
    })

	.state('main.employees', {
			url: '/employees',
			templateUrl: 'app/sidenav/employee/employee.html',
			controller: 'employeesController',
			controllerAs: 'vm',
			authenticate: true
		})
		
		.state('main.skills', {
			url: '/skills',
			templateUrl: 'app/sidenav/reports/skills/skills.html',
			controller: 'skillsController',
			controllerAs: 'vm',
			authenticate: true
			
		})
	
		.state('main.clients', {
			url: '/clients',
			templateUrl: 'app/sidenav/reports/clients/clients.html',
			controller: 'clientsController',
			controllerAs: 'vm',
			authenticate: true
			
		})
  });


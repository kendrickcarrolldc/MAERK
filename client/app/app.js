'use strict';

angular.module('maerkApp', ['maerkApp.auth', 'maerkApp.admin', 'maerkApp.constants', 'ngCookies',
    'ngResource', 'ngSanitize', 'ui.router', 'validation.match','ngMaterial', 'mdDataTable', 'ngMessages'
  ])
  .config(function($urlRouterProvider, $locationProvider, $mdThemingProvider) {
		$mdThemingProvider.theme('default')
    .primaryPalette('light-blue')
    .accentPalette('blue-grey');
	
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });

//add state provider


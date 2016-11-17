(function () {
	'use strict';

	angular.module('maerkApp')
		.controller('skillsController', function () {

		this.years = [2014, 2015, 2016];
		
		this.selectedYear = function() {
			
		}
		
		this.skills = [
            {
                first_name: 'Luis',
                last_name: 'Chapoy',
                salary: 10000    
            },
             {
                first_name: 'Nour',
                last_name: 'Matouk',
                salary: 9000   
            },
			
             {
                first_name: 'Rocky',
                last_name: 'karn',
                salary: 3000   
            },
			
             {
                first_name: 'Jamie',
                last_name: 'Liz',
                salary: 9000
            },
			
             {
                first_name: 'Anish',
                last_name: 'Rijal',
                salary: 8500
            },
			
             {
                first_name: 'Donovan',
                last_name: 'Klang',
                salary: 3000 
            },
			
             {
                first_name: 'Long',
                last_name: 'Pham',
                salary: 2000
            },
			
            {
                first_name: 'Raj',
                last_name: 'K',
                salary: 6000 
            },
			
            {
                first_name: 'Tarun',
                last_name: 'M',
                salary: 8000 
            },
			
            {
                first_name: 'Lily',
                last_name: 'Bather',
                salary: 7000
            },
        ];
		});
}());
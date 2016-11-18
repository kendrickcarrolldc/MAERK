(function () {
	'use strict';

	angular.module('maerkApp')
		.controller('skillsController', function () {

		this.years = [2014, 2015, 2016];
		
		this.selectedYear = function() {
			
		}
		
		this.report = function (newMonth) {
			this.monthSelect = this.month[newMonth];
			console.log(this.month['january'])
			return this.month['january']
			
		}
		
	
		
		this.month = {
			january: [{

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


			}],

			february: [{

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
            }, ],

			march: [{

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

			}]

		};
		
		
		this.monthSelect = [];
		
		this.report("march");
		
		this.myChartObject = {};
		
		this.myChartObject.type = "PieChart";
		
//		this.chartingData = function (month, prop) {
//			this.monthSelected = this.month[newMonth];
//			console.log(this.month['january'])
//			return this.month['january']
//		}
		
		this.myChartObject.data = this.month.january;
		
		this.myChartObject.options = {
        title: 'How Much Pizza I Ate Last Night',
				width: 500,
				height: 400
    };
		
		
//		this.onions = [{
//				v: "Onions"
//			},
//        {
//					v: 3
//				},
//		];
		
//		this.myChartObject.data = {
//			"cols": [
//        {id: "t", label: "Topping", type: "string"},
//        {id: "s", label: "Slices", type: "number"}
//    ], 
//			"rows": [ // rows -array, object, object with an array with objects inside
//        {c: [
//            {v: "Mushrooms"},
//            {v: 3},
//        ]},
//        {c: this.onions},
//        {c: [
//            {v: "Olives"},
//            {v: 31}
//        ]},
//        {c: [
//            {v: "Zucchini"},
//            {v: 1},
//        ]},
//        {c: [
//            {v: "Pepperoni"},
//            {v: 2},
//        ]}
//    ]};
		
//[{{[]}}]
								
// rows in a array of objects
								//each object has 

		});
}());
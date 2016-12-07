(function () {
	'use strict';

	angular.module('maerkApp')
		.controller('skillsController', function () {

		this.years = [2014, 2015, 2016];

		this.selectedYear = function() {

		}



		this.report = function (newMonth) {
			this.monthSelect = this.month[newMonth];
			this.createChartData("count");

			console.log(this.month['january'])
			return this.month['january']	
		}



		this.month = {
			january: [{

					first_name: 'Luis',
					skill: ["nodeJS", "AngularJS", "Git"],
					count: 3
            },
				{
					first_name: 'Nour',
					skill: ["nodeJS", "Git"],
					count: 2
            },

				{
					first_name: 'Rocky',
					skill: ["nodeJS", "AngularJS", "Git", "Illustrator"],
					count: 4
            },

				{
					first_name: 'Jamie',
					skill: ["nodeJS"],
					count: 1
            },

				{
					first_name: 'Anish',
					skill: ["nodeJS", "nodeJS"],
					count: 2


			}],

			february: [{

					first_name: 'Long',
					skill: ["nodeJS", "AngularJS", "Git", "Illustrator"],
					count: 4
            },

				{
					first_name: 'Raj',
					skill: [1,2,3,4,5],
					count: 5
            },

				{
					first_name: 'Tarun',
					skill: [1,2],
					count: 2
            },

				{
					first_name: 'Lily',
					skill: [1,2,4,7],
					count: 4
            }, ],

			march: [{

					first_name: 'Anish',
					skill: [1,2,4,7,5],
					count: 5
				},

				{
					first_name: 'Donovan',
					skill: [1,2,4],
					count: 3
				},

				{
					first_name: 'Long',
					skill: [1,2,4,7],
					count: 4
				},

				{
					first_name: 'Raj',
					skill: [1,2],
					count: 2

			}]

		};


		this.monthSelect = [];



		this.myChartObject = {};



		this.myChartObject.type = "PieChart";

		this.myChartObject.options = {
        title: 'How Much Pizza I Ate Last Night',


    };

		this.createChartData=function (prop){
			this.myChartObject.data = []; // Initiating myChartObjects data propertie
			this.myChartObject.data.push(["First Name",prop]) //push first array to initialize the title and value
			for(var i = 0; i < this.monthSelect.length; i++){
				//pushes the skills property of the select month and the property name
				this.myChartObject.data.push([this.monthSelect[i].first_name, this.monthSelect[i][prop]])
			}
			console.log(this.myChartObject.data)
		}


		this.report("march");


		});
}());

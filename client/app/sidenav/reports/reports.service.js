'use strict';

(function () {
	
	angular.module('maerkApp')
		.factory('ReportFact', function ($resource) {
	
	var reportResource = $resource('/api/report/:id/:controller', {
		
	}, {	
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
					method: 'POST',
				}	
	});
		
		var reportList = reportResource.query();
		console.log(reportList);
		
		return {
			reportList: reportList,
			reportResource: reportResource,
			create: function (report) {
				new reportResource(report).$save().then(function (newReport) {
					reportList.push(newReport)
					
				})
			},
			
			update: function (month) {
//			month.$save().then(function(updatedMonth) {
//			console.log(updatedMonth);
			
		},
		get: function () {
			
		},
		getOne: function () {
			
		}	
		}
			
		
});
	
})();
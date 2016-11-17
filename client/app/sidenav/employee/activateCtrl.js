(function () {
	'use strict';

	angular.module('maerkApp')
		.controller('actiController', function ($mdDialog, selectedRow, EmployeeFact, employeeList) {

			this.selectedRow = selectedRow;
			this.employeeList = employeeList;

			this.closeDialog = function () {
				$mdDialog.hide();
			}
			
			
			this.activateMe = function () {
				for (var j = 0; j < selectedRow.length; j++) {
					for (var i = 0; i < this.employeeList.length; i++) {
						if (this.employeeList[i]._id == selectedRow[j]) {
							this.employeeList[i].activate = true;
							EmployeeFact.update(this.employeeList[i]);

							break;
						}
					}
				} $mdDialog.cancel();
			};
		
		this.cancel = function() {
			$mdDialog.cancel;
		}
		});
}());
(function () {
	'use strict';

	angular.module('maerkApp')
	.controller('addController', function ($mdToast, EmployeeFact, $mdDialog, $mdSelect, $mdConstant) {
		
		this.addControls = true;
		this.editControls = false;

		
		this.employeeName = {};//angular.copy(edited)
		this.customKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];
		this.employeeName.skill = [];
		this.employeeName.client = [];

//close form function
		this.closeDialog = function () {
			$mdDialog.hide();
		}
		this.addEmployee = function (newHire) {
			EmployeeFact.create(newHire);
			$mdDialog.hide()
		}

	});
}());
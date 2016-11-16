(function () {
	'use strict';

	angular.module('maerkApp')
		.controller('editController', function ($mdToast, EmployeeFact, $mdDialog, $mdSelect, $mdConstant, editedEmp) {

			this.addControls = false;
			this.editControls = true;

			this.employeeName = angular.copy(editedEmp);
			this.customKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];

			this.closeDialog = function () {
				$mdToast.cancel();
				$mdDialog.hide();
			}
//mdToast dialog alert functionality			
			this.showConfirmSubmit = function () {
				$mdToast.show({
					hideDelay: 0,
					position: 'bottom center',
					templateUrl: './app/sidenav/employee/edit/toast-template.html',
					controller: 'toastController',
					controllerAs: 'vm'
				})
				.then(()=>{ // since then is function that happens later, use arrow function to refer to lexical scope and access employeename
					EmployeeFact.update(this.employeeName); //change to update
					$mdDialog.hide()
					console.log("save", editedEmp);	
				})
				.catch(function(){
				});
			};
		});
}());
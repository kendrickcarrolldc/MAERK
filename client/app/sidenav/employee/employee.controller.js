(function () {
	'use strict';

	angular.module('maerkApp')

	.controller('employeesController', function ($mdToast, EmployeeFact, $mdDialog, $mdSelect, $mdConstant) {

	this.employeeList = EmployeeFact.employeeList;
		
	
//Add employee dialog functionality
		this.showCustomGreeting = function () {
			$mdDialog.show({
				clickOutsideToClose: true,
//				scope: $scope, // use parent scope in template
				preserveScope: true, // do not forget this if use parent scope

				// Since GreetingController is instantiated with ControllerAs syntax
				// AND we are passing the parent '$scope' to the dialog, we MUST
				// use 'vm.<xxx>' in the template markup

				templateUrl: './app/sidenav/employee/add.employee.dialog.html',

// Dialog Controller instantiation
				controller: function DialogController( $mdDialog, EmployeeFact, $mdConstant) {

					this.employeeName={};
					this.customKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA];
					this.employeeName.skill = [];
					this.employeeName.client = [];

//close form function
					this.closeDialog = function () {
						$mdDialog.hide();
					}

//Add employee function
					this.addEmployee = function (newHire) {
						var semicolon = 186;
//						this.customKeys = [$mdConstant.KEY_CODE.ENTER, $mdConstant.KEY_CODE.COMMA, semicolon];
//						this.newHire = {}
//						this.newHire.skill = ["two"]
//						this.newHire.client = ["two"]
						EmployeeFact.create(newHire);
						console.log(newHire);

						$mdDialog.hide()
					}

				},
				controllerAs: 'vm'
			});
		}

//Employee toolbar functionality

		this.showEdit = false;
		this.showDelete = false;
		this.showStatus = false;

		this.selectedRowCallback = function (rows) {

			if (rows == 0) {
				this.showEdit = false;
				this.showDelete = false;
				this.showStatus = false;
				console.log("0 rows selected");
			} else if (rows.length == 1) {
				this.showEdit = true;
				this.showDelete = true;
				this.showStatus = true;
				console.log("1 row selected");
			} else {
				this.showEdit = false;
				this.showDelete = true;
				this.showStatus = true;
				console.log('nothing selected')
				console.log(rows);
			}
		}
//Employee connection to database from service
//		this.employeeList = EmployeeFact.employeeList;



		//Delete confirmation code-------->		

		//  $scope.showConfirm = function(ev) {
		//    // Appending dialog to document.body to cover sidenav in docs app
		//    var confirm = $mdDialog.confirm()
		//          .title('Would you like to delete your debt?')
		//          .textContent('All of the banks have agreed to forgive you your debts.')
		//          .ariaLabel('Lucky day')
		//          .targetEvent(ev)
		//          .ok('Please do it!')
		//          .cancel('Sounds like a scam');
		//
		//    $mdDialog.show(confirm).then(function() {
		//      $scope.status = 'You decided to get rid of your debt.';
		//    }, function() {
		//      $scope.status = 'You decided to keep your debt.';
		//    });
		//  };


	});
}());
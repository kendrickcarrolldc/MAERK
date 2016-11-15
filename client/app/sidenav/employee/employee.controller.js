(function () {
	'use strict';

	angular.module('maerkApp')

	.controller('employeesController', function ($mdToast, EmployeeFact, $mdDialog, $mdSelect, $mdConstant) {

		this.employeeList = EmployeeFact.employeeList;

//		this.addControls = true;
//		this.editControls = false;
//Add employee dialog functionality
		this.showAddForm = function () {
			
			$mdDialog.show({
				clickOutsideToClose: true,
				preserveScope: true,
				templateUrl: './app/sidenav/employee/add/addEmployee.html',
				
				// Add Controller instantiation
				controller: 'addController',
				controllerAs: 'vm',
			});
		}
		
// Edit funtionality		
		this.showEditForm = function () {
			
			var editedEmp = null
			for (var i = 0; i < this.employeeList.length; i++) {
				if (this.employeeList[i]._id == selectedRow[0]) { //selectedRow[0] is just getting first value you select from the employeeList array
					 console.log("inside")
								editedEmp = this.employeeList[i];
								break;
							}
				
			}
			console.log(editedEmp, selectedRow[0], this.employeeList.length)
		//look employee that will edited
		//selectedRow
	$mdDialog.show({
				clickOutsideToClose: true,
				preserveScope: true,
				templateUrl: './app/sidenav/employee/add/addEmployee.html',
				locals: {
					editedEmp: editedEmp
				},
// Edit Controller instantiation
				controller: 'editController',
				controllerAs: 'vm',
			});
		}

//Employee toolbar functionality
		this.showEdit = false;
		this.showDelete = false;
		this.showStatus = false;

//declared selected row for the selectedRowCallback function
		var selectedRow;
		
		this.selectedRowCallback = function (rows) {
				selectedRow = rows;
				if (rows.length == 0) {
					this.showEdit = false;
					this.showDelete = false;
					this.showStatus = false;
					console.log("0 rows selected");
				} else if (rows.length == 1) {
					this.showEdit = true;
					this.showDelete = true;
					this.showStatus = true;
					console.log(selectedRow);
//	
				}
				 else {
					this.showEdit = false;
					this.showDelete = true;
					this.showStatus = true;
					console.log('nothing selected')
				}
			}
		
	
//		
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
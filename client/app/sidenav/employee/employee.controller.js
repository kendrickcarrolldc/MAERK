(function () {
	'use strict';

	angular.module('maerkApp')

	.controller('employeesController', function ($mdToast, EmployeeFact, $mdDialog, $mdSelect, $mdConstant) {

		this.employeeList = EmployeeFact.employeeList;
		
		
// Activate deactive objects for md select
		this.actOpt = [{
			name: "Activate",
			fn: () => { // function loops through the selected rows and then the empList and changes activate to true
				
				for (var j = 0; j < selectedRow.length; j++) {
					for (var i = 0; i < this.employeeList.length; i++) {
						if (this.employeeList[i]._id == selectedRow[j]) {
							this.employeeList[i].activate = true;
							EmployeeFact.update(this.employeeList[i]);
		
							break;
						}
					}
				}
			}


		},
		{
			name: "Deactivate",
			fn: () => {
			
				for (var j = 0; j < selectedRow.length; j++) {
					for (var i = 0; i < this.employeeList.length; i++) {
						if (this.employeeList[i]._id == selectedRow[j]) {
							this.employeeList[i].activate = false;
							EmployeeFact.update(this.employeeList[i]);
							
							break;
						}
					}
				}
			}
		}];
		
	
	this.act = this.actOpt[0].name;
		

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

	});
}());
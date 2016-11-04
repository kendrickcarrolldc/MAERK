(function () {
	'use strict';

	angular.module('maerkApp')
		.controller('employeesController', function ($scope, $mdToast, EmployeeService, $mdDialog, $mdSelect) {

		
//		EmployeeService.get({id: 1}, function(data) {
//			$scope.post = data;
//		})
		

		
		$scope.showEdit = false;
		$scope.showDelete = false;
		$scope.showStatus = false;
		
		$scope.selectedRowCallback = function(rows) {
			
			if (rows == 0) {
				$scope.showEdit = false;
				$scope.showDelete = false;
				$scope.showStatus = false;
				console.log("0 rows selected");
			}
			
			else if (rows.length == 1) {
				$scope.showEdit = true;
				$scope.showDelete = true;
				$scope.showStatus = true;
				console.log("1 row selected");
			}
			
			else {
				$scope.showEdit = false;
				$scope.showDelete = true;
				$scope.showStatus = true;
				console.log('nothing selected')
				console.log(rows);
			}
		}
		
		$scope.employeeList = EmployeeService.query();
		
		
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
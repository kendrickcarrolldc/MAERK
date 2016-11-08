(function () {
	'use strict';

	angular.module('maerkApp')
	
		.controller('employeesController', function ($scope, $mdToast, EmployeeFact, $mdDialog, $mdSelect) {

		
		$scope.showCustomGreeting = function() {
			$mdDialog.show({
          clickOutsideToClose: true,
          scope: $scope,        // use parent scope in template
          preserveScope: true,  // do not forget this if use parent scope

          // Since GreetingController is instantiated with ControllerAs syntax
          // AND we are passing the parent '$scope' to the dialog, we MUST
          // use 'vm.<xxx>' in the template markup

          templateUrl: './app/sidenav/employee/add.employee.dialog.html',
				
          controller: function DialogController($scope, $mdDialog,EmployeeFact) {
            $scope.closeDialog = function() {
							
              $mdDialog.hide();
            }
						$scope.addEmployee = function(newHire) {
							
							EmployeeFact.create(newHire);
							console.log(newHire);

							$mdDialog.hide()
						}

          },
				controllerAs:'vm'
       });
    }
		
//Employee toolbar functionality
		
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
		
		$scope.employeeList = EmployeeFact.employeeList;
		

		
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
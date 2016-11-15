(function () {
	'use strict';

	angular.module('maerkApp')
		.controller('toastController', function ($mdToast) {

			this.closeToast = function () {
				$mdToast.cancel();
			}

			this.updateEmployee = function () {
				$mdToast.hide()
			}
		});
}());
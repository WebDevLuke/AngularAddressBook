"use strict"

module.exports = function(contactsService){
	return {
		restrict: "E",
		templateUrl: "js/directives/deleteContactModel.html",
		scope: {
			contact: "="
		},
		replace:"true",
		controller: function($scope) {
			$scope.deleteContact = contactsService.deleteContact;
		},
		controllerAs: "deleteContactModelCtrl"
	}
};
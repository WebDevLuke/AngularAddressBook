"use strict"

module.exports = function(){
	return {
		restrict: "E",
		templateUrl: "js/directives/addContactModel.html",
		replace:"true",
		controller: function($scope, contactsService){ 
			this.closeForm = function(){
				document.getElementById("addContact").reset();
				$scope.addContact.$setPristine();
				$scope.addContact.$setUntouched();
			},
			this.submitForm = function(){
				var formData = {};
				formData.firstName = document.getElementById("first-name").value;
				formData.lastName = document.getElementById("last-name").value; 
				formData.emailAddress = document.getElementById("email-address").value;
				formData.telephoneNumber = document.getElementById("telephone-number").value;
				contactsService.addNewContact(formData);
			}
		},
		controllerAs: "contactsForm"
	}
};
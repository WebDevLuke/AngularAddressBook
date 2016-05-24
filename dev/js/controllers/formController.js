"use strict"

module.exports = function($scope, contactsService){ 

	this.closeForm = function(){
		document.getElementById("add-contact").reset();
	}

	this.submitForm = function(){
		console.log($scope.formData);
		contactsService.addNewContact($scope.formData);
	}

};
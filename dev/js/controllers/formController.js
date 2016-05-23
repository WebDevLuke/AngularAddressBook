"use strict"

module.exports = function($scope, contactsService){ 

	this.closeForm = function(){
		document.getElementById("add-contact").reset();
	}

	this.submitForm = function(){
		contactsService.addNewContact($scope.formData);
	}

};
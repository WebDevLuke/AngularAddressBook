"use strict"

module.exports = function(contactsService){
	return {
		restrict: "E",
		templateUrl: "js/directives/contacts.html",
		replace:"true" ,
		controller: function($scope){
			contactsService.getContacts();
			this.contacts = contactsService.contacts;
			this.deleteContact = contactsService.deleteContact; 
		},
		controllerAs: "addressBook" 
	}
};
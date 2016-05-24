"use strict"

module.exports = function($scope, contactsService){
	contactsService.getContacts();
	this.contacts = contactsService.contacts;
	this.deleteContact = contactsService.deleteContact;
	console.log($scope);
};
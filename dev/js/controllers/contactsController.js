"use strict"

module.exports = function($scope, contactsService){
	this.contacts = contactsService.getContacts();
};
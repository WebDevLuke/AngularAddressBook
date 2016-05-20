"use strict"

module.exports = angular.module("app", []).controller("contactsController", function(){
	var data = require("../../data/contacts");
	this.contacts = data;

	for(var i = 0; i < this.contacts.length; i++) {
		this.contacts[i].fullName = this.contacts[i].firstName + " " + this.contacts[i].lastName;
	}
});
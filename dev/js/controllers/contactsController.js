"use strict"

module.exports = angular.module("app", []).controller("contactsController", function($scope){

	// var data = require("../../data/contacts");
	// localStorage.setItem('contacts', JSON.stringify(data));

	if(localStorage.getItem("contacts")) {
		this.contacts = JSON.parse(localStorage.getItem('contacts'));

		for(var i = 0; i < this.contacts.length; i++) {
			this.contacts[i].fullName = this.contacts[i].firstName + " " + this.contacts[i].lastName;
		}

	}

	this.contactForm = {};

	this.contactForm.submit = function(){
		console.log("submit");

		// Create session object in scope
		this.contactForm.session = {};

	}

	this.contactForm.clear = function(){
		console.log("cleared");
		$("#add-contact").reset();
	};

	console.log($scope);

});
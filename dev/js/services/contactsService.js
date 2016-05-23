"use strict"

module.exports = function(){

	var service = {
		getContacts: function(){

			var data = require("../../data/contacts");
			localStorage.setItem('contacts', JSON.stringify(data));

			if(localStorage.getItem("contacts")) {
				this.contacts = JSON.parse(localStorage.getItem('contacts'));

				for(var i = 0; i < this.contacts.length; i++) {
					this.contacts[i].fullName = this.contacts[i].firstName + " " + this.contacts[i].lastName;
				}
				return this.contacts;
			}
			return false;
		}
	}

	return service;

};
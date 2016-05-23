"use strict"

module.exports = function(){

	var service = {

		contactsArray: [],

		getContacts: function(){
			if(localStorage.getItem("contacts")) {
				this.contacts = JSON.parse(localStorage.getItem('contacts'));

				for(var i = 0; i < this.contacts.length; i++) {
					this.contacts[i].fullName = this.contacts[i].firstName + " " + this.contacts[i].lastName;
				}
				return this.contacts;
			}
			return false;
		},
 
		addNewContact: function(formData) {

			// Push new data to contacts array
			var newContactObj = this.getContacts();
			newContactObj.push(formData);

			// Stringify and push to local storage
			localStorage.setItem('contacts', JSON.stringify(newContactObj));

			return newContactObj;

		}
	}

	return service;

};
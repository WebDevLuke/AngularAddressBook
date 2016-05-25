"use strict"

module.exports = function(){

	var service = { 

		contacts: {},

		getContacts: function(){
			// Get from local storage if exists
			if(localStorage.getItem("contacts")) {
				var contactsList = JSON.parse(localStorage.getItem('contacts'));	
				this.contacts = contactsList;
			}

			console.log(this.contacts);

		},
 
		addNewContact: function(formData) {
			// Create fullName parameter
			formData.fullName = formData.firstName + " " + formData.lastName;

			var firstLetter = formData.firstName.substring(0,1).toUpperCase();
			if(!this.contacts[firstLetter]) {
				this.contacts[firstLetter] = [];
			}
			this.contacts[firstLetter].push(formData);

			// Push to local storage
			localStorage.setItem('contacts', JSON.stringify(this.contacts));
		},

<<<<<<< HEAD
		deleteContact: function(index) {
			this.contacts.splice(index, 1);

			// Push to local storage
			localStorage.setItem('contacts', JSON.stringify(this.contacts));
=======
		deleteContact: function(item) {

			this.contacts.splice(this.contacts.indexOf(item),1);

			// Push to local storage
			//localStorage.setItem('contacts', JSON.stringify(this.contacts));
>>>>>>> develop
		}

	}

	return service;

};
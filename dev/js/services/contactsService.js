"use strict"

module.exports = function(){

	var service = { 

		contacts: [], 

		getContacts: function(){
			if(localStorage.getItem("contacts")) {
				this.contacts = JSON.parse(localStorage.getItem('contacts'));
				return this.contacts;
			}
		},
 
		addNewContact: function(formData) {
			// Create fullName parameter
			formData.fullName = formData.firstName + " " + formData.lastName;

			// Push new data to contacts
			this.contacts.push(formData);

			console.log(this.contacts);

			// Push to local storage
			localStorage.setItem('contacts', JSON.stringify(this.contacts));
		}
	}

	return service;

};
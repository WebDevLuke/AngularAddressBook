"use strict"

module.exports = function(){

	var service = { 

		contacts: [], 

		getContacts: function(){
			if(localStorage.getItem("contacts")) {
				service.contacts = JSON.parse(localStorage.getItem('contacts'));
				return service.contacts;
			}
		},
 
		addNewContact: function(formData) {
			// Create fullName parameter
			formData.fullName = formData.firstName + " " + formData.lastName;

			// Push new data to contacts
			service.contacts.push(formData);

			console.log(service.contacts);

			// Push to local storage
			localStorage.setItem('contacts', JSON.stringify(service.contacts));
		},

		deleteContact: function(item) {

			console.log("DELETING")

			service.contacts.splice(service.contacts.indexOf(item),1);

			// Push to local storage
			localStorage.setItem('contacts', JSON.stringify(service.contacts)); 
		}

	}

	return service;

};
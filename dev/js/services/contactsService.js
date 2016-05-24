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

			// Store latest contacts array in local
			// First we need to strip hashkey
			var objStore = this.contacts;
			for(var i = 0; i < objStore.length; i++) { 
				if(objStore[i].$$hashKey) {
					delete objStore[i].$$hashKey;
				}
			}

			// Push to local storage
			localStorage.setItem('contacts', JSON.stringify(objStore));
		}
	}

	return service;

};
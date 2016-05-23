module.exports = function($scope, contactsService){

	this.contacts = contactsService.getContacts();
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

};
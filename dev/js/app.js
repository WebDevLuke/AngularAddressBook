"use strict"

var $ = require('jquery')(window);
global.jQuery = require("jquery");
var bootstrap = require("bootstrap");
var angular = require("angular");
var ngMessages = require("angular-messages");
var app = angular.module('app', ['ngMessages']); 

// Create services
app.service('contactsService', require('./services/contactsService'));  

// Create custom directives
app.directive("contact", require("./directives/contact"));
app.directive("addContactModel", require("./directives/addContactModel"));
app.directive("deleteContactModel", require("./directives/deleteContactModel"));  

// Create containers
app.controller('contactsController', ['$scope', 'contactsService', require('./controllers/contactsController')]); 
app.controller('formController', ['$scope', 'contactsService', require('./controllers/formController')]); 
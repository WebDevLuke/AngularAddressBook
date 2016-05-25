"use strict"

var $ = require('jquery')(window);
global.jQuery = require("jquery");
var bootstrap = require("bootstrap");
var angular = require("angular");
var ngMessages = require("angular-messages");
var app = angular.module('app', ['ngMessages']); 

// Create services
app.service('contactsService', require('./services/contactsService'));  

// Creative Directives
//app.directive("closeFormBtn", ['contactsService', require('./directives/closeFormBtn')]);
app.directive("testDirective", require('./directives/testDirective'));

// Create containers
app.controller('contactsController', ['$scope', 'contactsService', require('./controllers/contactsController')]); 
app.controller('formController', ['$scope', 'contactsService', require('./controllers/formController')]); 
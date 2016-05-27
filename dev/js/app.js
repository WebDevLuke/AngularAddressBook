"use strict"

var $ = require('jquery')(window);
global.jQuery = require("jquery");
var bootstrap = require("bootstrap");
var angular = require("angular");
var ngMessages = require("angular-messages");
var ngRoute= require("angular-route");

var app = angular.module('app', ['ngMessages', 'ngRoute']); 

// Create services
app.service('contactsService', require('./services/contactsService'));  

// Create custom directives
app.directive("contacts", require("./directives/contacts"));
app.directive("addContactModel", require("./directives/addContactModel"));
app.directive("deleteContactModel", ['contactsService', require("./directives/deleteContactModel")]);
app.directive("viewContactModel", require("./directives/viewContactModel"));  

// Create containers
// app.controller('contactsController', ['$scope', 'contactsService', require('./controllers/contactsController')]);  
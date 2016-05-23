"use strict"

var $ = require('jquery')(window);
global.jQuery = require("jquery");
var bootstrap = require("bootstrap");
var angular = require("angular");
var app = angular.module('app', []);

// Pull in modules
var contactsController = require('./controllers/contactsController');
var contactsService = require('./services/contactsService');

// Create controllers and services
app.service('contactsService', contactsService);
app.controller('contactsController', ['$scope', 'contactsService', contactsController]); 
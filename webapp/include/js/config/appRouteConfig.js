var app = angular.module('myApp', ['ngRoute']).config(function($routeProvider){
	
	$routeProvider
	.when('/', {
		template: "root.html"
	})
	.when('/recordCity', {
		template: "recordCity.html",
		controller: "recordCityController"
	})
	
});

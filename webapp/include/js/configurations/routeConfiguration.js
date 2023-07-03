angular.module("myApp").config(function($routeProvider){
	$routeProvider.when("/client", {
		templateUrl: "/root.html",
		controller: "myAppController"
	});
});
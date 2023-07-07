angular.module("cash").service("cashAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3001/sale");
	};
	
	this.post = function(user){
		return $http.post("http://localhost:3001/sale", user);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/sale/"+parameter);
	};
	
});
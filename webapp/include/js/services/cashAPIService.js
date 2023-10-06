angular.module("cash").service("cashAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:8081/sale");
	};
	
	this.post = function(user){
		return $http.post("http://localhost:8081/sale/insert", user);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:8081/sale/delete/"+parameter);
	};
	
});
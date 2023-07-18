angular.module("recordService").service("serviceAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3001/service");
	};
	
	
	this.post = function(user){
		return $http.post("http://localhost:3001/service", user);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/service/"+parameter);
	};
	
	this.patch = function(parameter, parameter2){
		return $http.patch("http://localhost:3001/service/"+parameter, parameter2);
	};
});
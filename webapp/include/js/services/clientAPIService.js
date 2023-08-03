angular.module("recordClient").service("clientAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3001/client");
	};
	
	this.post = function(client){
		return $http.post("http://localhost:3001/client", client);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/client/"+parameter);
	};
	

	this.patch = function(parameter, parameter2){
		return $http.patch("http://localhost:3001/client/"+parameter, parameter2);
	};
	
});
angular.module("recordCity").service("cityAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3001/City");
	};
	
	this.post = function(city){
		return $http.post("http://localhost:3001/City", city);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/City/"+parameter);
	};
	

	this.patch = function(parameter, parameter2){
		return $http.patch("http://localhost:3001/City/"+parameter, parameter2);
	};
	
});
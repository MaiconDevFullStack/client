angular.module("recordState").service("stateAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3001/state");
	};
	
	this.post = function(state){
		return $http.post("http://localhost:3001/state", state);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/state/"+parameter);
	};
	

	this.patch = function(parameter, parameter2){
		return $http.patch("http://localhost:3001/state/"+parameter, parameter2);
	};
	
});
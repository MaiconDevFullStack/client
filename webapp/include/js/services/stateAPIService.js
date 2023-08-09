angular.module("recordState").service("stateAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3300/state/getAll");
	};
	
	this.post = function(state){
		return $http.post("http://localhost:3300/state/insert", state);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3300/state/delete/"+parameter);
	};
	

	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:3300/state/edit/"+parameter, parameter2);
	};
	
});
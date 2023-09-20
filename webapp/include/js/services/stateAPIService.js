angular.module("recordState").service("stateAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:8081/state/getAll");
	};
	
	this.getById = function(parameter){
		return $http.get("http://localhost:8081/state/getById/"+parameter);
	};
	
	this.post = function(state){
		return $http.post("http://localhost:8081/state/insert", state);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:8081/state/delete/"+parameter);
	};
	

	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:8081/state/edit/"+parameter, parameter2);
	};
	
});
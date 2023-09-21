angular.module("recordCity").service("cityAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:8081/city/getAll");
	};
	
	//this.getForPrincipal = function(){
		//return $http.get("http://localhost:3300/city/getAllForPrincipalTable");
	//};
	
	//this.getById = function(parameter){
		//return $http.get("http://localhost:3300/city/getById/"+parameter);
	//};
	
	this.post = function(city){
		return $http.post("http://localhost:8081/city/insert", city);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:8081/city/delete/"+parameter);
	};
	

	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:8081/city/edit/"+parameter, parameter2);
	};
	
});
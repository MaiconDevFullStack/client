angular.module("recordCostumer").service("costumerAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:8081/costumer/getAll");
	};
	
	/*
	this.getWithPagination = function(){
		return $http.get("http://localhost:3300/costumer/getWithPagination");
	};
	*/
	
	this.post = function(costumer){
		return $http.post("http://localhost:8081/costumer/insert", costumer);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:8081/costumer/delete/"+parameter);
	};
	
	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:8081/costumer/edit/"+parameter, parameter2);
	};
	
});
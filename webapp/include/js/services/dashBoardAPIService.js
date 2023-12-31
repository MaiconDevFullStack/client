angular.module("dashBoard").service("dashBoardAPI", function($http){
	/*
	this.get = function(){
		return $http.get("http://localhost:8082/dashBoard/getAll");
	};
	*/
	
	this.get = function(){
		return $http.get("http://localhost:8081/dashBoard/getAll");
	};
	
	
	this.post = function(dashBoard){
		return $http.post("http://localhost:8081/dashBoard/insert", dashBoard);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:8081/dashBoard/delete/"+parameter);
	};
	
	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:8081/dashBoard/edit/"+parameter, parameter2);
	};
	
});
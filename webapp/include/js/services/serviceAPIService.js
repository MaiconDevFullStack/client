angular.module("recordService").service("serviceAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:8081/service/getAll");
	};
	
	
	this.post = function(service){
		return $http.post("http://localhost:8081/service/insert", service);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:8081/service/delete/"+parameter);
	};
	
	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:8081/service/edit/"+parameter, parameter2);
	};
});
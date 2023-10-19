angular.module("device").service("deviceAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:8081/device/getAll");
	};
	
	this.post = function(device){
		return $http.post("http://localhost:8081/device/insert", device);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:8081/device/delete/"+parameter);
	};
	
	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:8081/device/edit/"+parameter, parameter2);
	};
	
});
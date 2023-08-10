angular.module("recordUser").service("userAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3300/sysuser/getAll");
	};
	
	this.post = function(user){
		return $http.post("http://localhost:3300/sysuser/insert", user);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3300/sysuser/delete/"+parameter);
	};
	
	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:3300/sysuser/edit/"+parameter, parameter2);
	};
});
angular.module("recordUser").service("userAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3001/User");
	};
	
	this.post = function(user){
		return $http.post("http://localhost:3001/User", user);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/User/"+parameter);
	};
	
	this.patch = function(parameter, parameter2){
		return $http.patch("http://localhost:3001/User/"+parameter, parameter2);
	};
});
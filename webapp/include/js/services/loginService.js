angular.module("login").service("loginAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3001/user");
	};
	
	this.post = function(login){
		return $http.post("http://localhost:3001/user", login);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/user/"+parameter);
	};
	
	this.patch = function(parameter, parameter2){
		return $http.patch("http://localhost:3001/user"+parameter, parameter2);
	};

});
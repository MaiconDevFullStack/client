angular.module("login").service("loginAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3300/user/getAll");
	};
	
	
	this.post = function(user){
		return $http.post("http://localhost:3300/user/insert", user);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3300/user/delete/"+parameter);
	};
	
	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:3300/user/edit/"+parameter, parameter2);
	};

});
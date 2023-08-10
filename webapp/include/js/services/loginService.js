angular.module("login").service("loginAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3300/sysuser/getAll");
	};

});
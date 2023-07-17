angular.module("constructDataBase").service("constructDataBaseAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3300/retrieveProduct");
	};
	
	this.post = function(){
		return $http.post("http://localhost:3300/create", null);
	};
});
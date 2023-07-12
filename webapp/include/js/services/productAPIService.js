angular.module("recordProduct").service("productAPI", function($http){
	/*
	this.get = function(){
		return $http.get("http://localhost:3001/product");
	};
	*/
	this.get = function(){
		return $http.get("http://localhost:3300/retrieveProduct");
	};
	
	this.post = function(city){
		return $http.post("http://localhost:3001/product", city);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/product/"+parameter);
	};
	

	this.patch = function(parameter, parameter2){
		return $http.patch("http://localhost:3001/product/"+parameter, parameter2);
	};
	
});
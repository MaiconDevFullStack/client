angular.module("recordProduct").service("productAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:8081/product/getAll");
	};
	
	this.post = function(product){
		return $http.post("http://localhost:8081/product/insert", product);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:8081/product/delete/"+parameter);
	};
	

	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:8081/product/edit/"+parameter, parameter2);
	};
	
});
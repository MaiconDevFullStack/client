angular.module("recordGender").service("genderAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3001/gender");
	};
	
	this.post = function(gender){
		return $http.post("http://localhost:3001/gender", gender);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3001/gender/"+parameter);
	};
	

	this.patch = function(parameter, parameter2){
		return $http.patch("http://localhost:3001/gender/"+parameter, parameter2);
	};
	
});
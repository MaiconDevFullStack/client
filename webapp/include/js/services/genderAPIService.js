angular.module("recordGender").service("genderAPI", function($http){
	
	this.get = function(){
		return $http.get("http://localhost:3300/gender/getAll");
	};
	
	this.post = function(gender){
		return $http.post("http://localhost:3300/gender/insert", gender);
	};
	
	this.delete = function(parameter){
		return $http.delete("http://localhost:3300/gender/delete/"+parameter);
	};
	

	this.put = function(parameter, parameter2){
		return $http.put("http://localhost:3300/gender/edit/"+parameter, parameter2);
	};
	
});
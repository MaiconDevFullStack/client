var app = angular.module("myApp", []).controller("myAppController", function($scope, $http){
	
	$scope.cities = [];
	
	
	refresh();
	
	function refresh(){
		$http.get("http://localhost:3001/City").then(function(response){
			$scope.cities = response.data;
		});
	}
	
	$scope.btnInsert = function(city){
		$http.post("http://localhost:3001/City", city).then(function(){
			delete $scope.city;
			$scope.selectedObject = null;
			refresh();
		});
		
	}
	
	$scope.btnDelete = function(){
		var parameter = $scope.selectedObject.id; 
		$http.delete("http://localhost:3001/City/"+parameter).then(function(){
			$scope.selectedObject = null;
			refresh();	
		});
		
	}
	
	$scope.edit = function(city){
		$scope.city = angular.copy(city);
		$(document).ready(function() {
			$('#editModal').modal();
		});
	
	}
	
	$scope.selectObject = function(obj){
		$scope.selectedObject = obj;
		console.log($scope.selectedObject);
	}
})
var app = angular.module("myApp", []);
 app.controller("myAppController", function($scope, $http){
	
	$scope.cities = [];
	$scope.modalMessage = null;
	
	refresh();
	
	function refresh(){
		$http.get("http://localhost:3001/City").then(function(response){
			$scope.cities = response.data;
		});
	}
	
	$scope.btnInsert = function(){
		$scope.city = {};
		$(document).ready(function() {
			$('#insertModal').modal();
		});
	}
	
	$scope.insertCity = function(city){
		if(!city.name){
			$scope.modalMessage = 'Please Insert the Name!';
			return;
		}
		if(!city.size){
			$scope.modalMessage = 'Please Insert the Size!';
			return;
		}
		$http.post("http://localhost:3001/City", city).then(function(){
			delete $scope.city;
			$scope.selectedObject = null;
			$('#insertModal').modal('hide');
			refresh();
		});
	}
	
	$scope.btnDelete = function(){
		if(!$scope.selectedObject){
			$(document).ready(function() {
				$('#warningModal').modal();
			});
			$scope.modalMessage = 'Please Select At Least One Record!';
			return;
		} else {
			$scope.modalMessage = 'Do You Really Want Remove The Record?!';
			$(document).ready(function() {
				$('#deleteModal').modal();
			});
		}
	}
	
	$scope.deleteCity = function(){
		var parameter = $scope.selectedObject.id; 
		$http.delete("http://localhost:3001/City/"+parameter).then(function(){
			$scope.selectedObject = null;
			$('#deleteModal').modal('hide');
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
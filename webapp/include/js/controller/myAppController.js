var app = angular.module("myApp", []);
 app.controller("myAppController", function($scope, $http){
	
	$scope.cities = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	
	refresh();
	
	function refresh(){
		$http.get("http://localhost:3001/City").then(function(response){
			$scope.cities = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
		});
	}
	
	$scope.btnInsert = function(){
		$scope.city = {};
		$scope.modalMessage = null;
		$scope.error = false;
		$scope.selectedObject = null;
		$scope.modalTitle = 'Insert City';
		$(document).ready(function() {
			$('#insertModal').modal();
		});
	}
	
	$scope.insertCity = function(city){
		if(!city.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			return;
		}
		if(!city.size){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Size!';
			return;
		}
		$http.post("http://localhost:3001/City", city).then(function(){
			delete $scope.city;
			$scope.selectedObject = null;
			$scope.modalTitle = null;
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
			$scope.modalMessage = 'Do You Really Want Remove The Record?';
			$scope.modalTitle = 'Delete City';
			$scope.modalMessageObject = $scope.selectedObject.name;
			$(document).ready(function() {
				$('#deleteModal').modal();
			});
		}
	}
	
	$scope.deleteCity = function(){
		var parameter = $scope.selectedObject.id; 
		$http.delete("http://localhost:3001/City/"+parameter).then(function(){
			$scope.selectedObject = null;
			$scope.modalTitle = null;
			$scope.modalMessageObject = null;
			$('#deleteModal').modal('hide');
			refresh();	
		});
	}
	
	$scope.edit = function(city){
		$scope.city = angular.copy(city);
		$scope.modalTitle = 'Edit City';
		$(document).ready(function() {
			$('#editModal').modal();
		});
	}
	
	$scope.confirmEdit = function(){
		var parameter = $scope.selectedObject.id;
		var parameter2 = $scope.city;
		$http.patch("http://localhost:3001/City/"+parameter, parameter2).then(function(){
			$scope.selectedObject = null;
			$scope.modalTitle = null;
			$('#editModal').modal('hide');
			refresh();	
		});
	}
	
	$scope.selectObject = function(obj){
		$scope.selectedObject = obj;
		console.log($scope.selectedObject);
	}
})
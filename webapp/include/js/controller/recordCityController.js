var app = angular.module("recordCity",['recordState']).controller("recordCityController",['$scope', 'cityAPI','stateAPI', function($scope, cityAPI, stateAPI){

	
	$scope.cities = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	$scope.states = [];
	
	
	refresh();
	
	function refresh(){
		stateAPI.get().then(function(response){
			$scope.states = response.data;
			cityAPI.get().then(function(response){
				$scope.cities = response.data;
				$scope.modalMessage = null;
				$scope.error = false;
				$scope.lengthCity = $scope.cities.length;
			});
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
			document.getElementById("iName").focus();
			return;
		}
		else if(!city.state){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the State/Provincy!';
			document.getElementById("iState").focus();
			return;
		}
		else {
			cityAPI.post(city).then(function(){
				delete $scope.city;
				$scope.selectedObject = null;
				$scope.modalTitle = null;
				$('#insertModal').modal('hide');
				refresh();
			});
		}
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
		cityAPI.delete(parameter).then(function(){
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
		if(!parameter2.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("eName").focus();
			return;
		}
		else if(!parameter2.state){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the State!';
			document.getElementById("eState").focus();
			return;
		}
		else {
			cityAPI.patch(parameter, parameter2).then(function(){
				$scope.selectedObject = null;
				$scope.modalTitle = null;
				$scope.error = false;
				$('#editModal').modal('hide');
				refresh();	
			});
		}
	}
	
	$scope.location = function(){
		location.href ="root.html";
	}
	
	$scope.selectObject = function(obj){
		$scope.selectedObject = obj;
	}
	
}])
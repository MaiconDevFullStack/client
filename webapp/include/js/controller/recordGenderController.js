var app = angular.module("recordGender",[]).controller("recordGenderController", ['$scope', 'genderAPI', function($scope, genderAPI){
	
	$scope.genders = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	
	
	refresh();
	
	function refresh(){
		genderAPI.get().then(function(response){
			$scope.genders = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			$scope.lengthGender = $scope.genders.length;
		});
	}
	
	$scope.btnInsert = function(){
		$scope.gender = {};
		$scope.modalMessage = null;
		$scope.error = false;
		$scope.selectedObject = null;
		$scope.modalTitle = 'Insert Gender';
		$(document).ready(function() {
			$('#insertModal').modal();
		});
	}
	
	$scope.insertGender = function(gender){
		if(!gender.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("iName").focus();
			return;
		}
		else if(!gender.sail){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Sail!';
			document.getElementById("iSail").focus();
			return;
		}
		else {
			genderAPI.post(gender).then(function(){
				delete $scope.gender;
				$scope.selectedObject = null;
				$scope.modalTitle = null;
				$('#insertModal').modal('hide');
				refresh();
			});
		}
	}
	
	$scope.btnDelete = function(){
		$scope.modalMessage = 'Do You Really Want Remove The Record?';
		$scope.modalTitle = 'Delete Gender!';
		$scope.modalMessageObject = $scope.selectedObject.name;
		$(document).ready(function() {
			$('#deleteModal').modal();
		});
	}
	
	$scope.deleteGender = function(){
		var parameter = $scope.selectedObject.id; 
		genderAPI.delete(parameter).then(function(){
			$scope.selectedObject = null;
			$scope.modalTitle = null;
			$scope.modalMessageObject = null;
			$('#deleteModal').modal('hide');
			refresh();	
		});
	}
	
	$scope.edit = function(gender){
		$scope.gender = angular.copy(gender);
		$scope.modalTitle = 'Edit Gender';
		$(document).ready(function() {
			$('#editModal').modal();
		});
	}
	
	$scope.confirmEdit = function(){
		var parameter = $scope.selectedObject.id;
		var parameter2 = $scope.gender;
		if(!parameter2.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("eName").focus();
			return;
		}
		else if(!parameter2.sail){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Sail!';
			document.getElementById("eSail").focus();
			return;
		}
		else {
			genderAPI.patch(parameter, parameter2).then(function(){
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
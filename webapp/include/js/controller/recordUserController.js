var app = angular.module("recordUser",[]).controller("recordUserController",['$scope', 'userAPI', function($scope, userAPI){
	
	$scope.users = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	
	
	refresh();
	
	function refresh(){
		userAPI.get().then(function(response){
			$scope.users = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			$scope.lengthCity = $scope.users.length;
		});
	}
	
	$scope.btnInsert = function(){
		$scope.user = {};
		$scope.modalMessage = null;
		$scope.error = false;
		$scope.selectedObject = null;
		$scope.modalTitle = 'Insert User';
		$(document).ready(function() {
			$('#insertModal').modal();
		});
	}
	
	$scope.insertUser = function(user){
		if(!user.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("iName").focus();
			return;
		}
		else if(!user.login){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Login!';
			document.getElementById("iLogin").focus();
			return;
		}
		else if(!user.password){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Password!';
			document.getElementById("iPassword").focus();
			return;
		}
		else {
			userAPI.post(user).then(function(){
				delete $scope.user;
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
			$scope.modalTitle = 'Delete User';
			$scope.modalMessageObject = $scope.selectedObject.name;
			$(document).ready(function() {
				$('#deleteModal').modal();
			});
		}
	}
	
	$scope.deleteUser = function(){
		var parameter = $scope.selectedObject.id; 
		userAPI.delete(parameter).then(function(){
			$scope.selectedObject = null;
			$scope.modalTitle = null;
			$scope.modalMessageObject = null;
			$('#deleteModal').modal('hide');
			refresh();	
		});
	}
	
	$scope.edit = function(user){
		$scope.user = angular.copy(user);
		$scope.modalTitle = 'Edit User';
		$(document).ready(function() {
			$('#editModal').modal();
		});
	}
	
	$scope.confirmEdit = function(){
		var parameter = $scope.selectedObject.id;
		var parameter2 = $scope.user;
		if(!parameter2.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("eName").focus();
			return;
		}
		else if(!parameter2.login){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Login!';
			document.getElementById("eLogin").focus();
			return;
		}
		else if(!parameter2.password){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Password!';
			document.getElementById("ePassword").focus();
			return;
		}
		else {
			userAPI.patch(parameter, parameter2).then(function(){
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
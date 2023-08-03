var app = angular.module("recordClient",['recordCity','recordGender']).controller("recordClientController",['$scope', 'clientAPI','cityAPI', 'genderAPI', function($scope, clientAPI, cityAPI, genderAPI){

	
	$scope.clients = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	$scope.cities = [];
	$scope.genders = [];
	
	refresh();
	
	function refresh(){
		genderAPI.get().then(function(response){
			$scope.genders = response.data;
			cityAPI.get().then(function(response){
				$scope.cities = response.data;
				clientAPI.get().then(function(response){
					$scope.clients = response.data;
					$scope.modalMessage = null;
					$scope.error = false;
					$scope.lengthClient = $scope.clients.length;
					$scope.itensPerPage = $scope.lengthCity/5;
				});
			});
		});
	}
	
	
	$scope.btnInsert = function(){
		$scope.client = {};
		$scope.modalMessage = null;
		$scope.error = false;
		$scope.selectedObject = null;
		$scope.modalTitle = 'Insert Client';
		$(document).ready(function() {
			$('#insertModal').modal();
		});
	}
	
	$scope.insertClient = function(client){
		if(!client.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("iName").focus();
			return;
		}
		else if(!client.city){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the City!';
			document.getElementById("iCity").focus();
			return;
		}
		else {
			clientAPI.post(client).then(function(){
				delete $scope.client;
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
			$scope.modalTitle = 'Delete Client';
			$scope.modalMessageObject = $scope.selectedObject.name;
			$(document).ready(function() {
				$('#deleteModal').modal();
			});
		}
	}
	
	$scope.deleteClient = function(){
		var parameter = $scope.selectedObject.id; 
		clientAPI.delete(parameter).then(function(){
			$scope.selectedObject = null;
			$scope.modalTitle = null;
			$scope.modalMessageObject = null;
			$('#deleteModal').modal('hide');
			refresh();	
		});
	}
	
	$scope.edit = function(client){
		$scope.client = angular.copy(client);
		
		if($scope.client.dateBirth){
			$scope.client.dateBirth = new Date($scope.client.dateBirth);
		}
		
		$scope.modalTitle = 'Edit Client';
		$(document).ready(function() {
			$('#editModal').modal();
		});
	}
	
	$scope.confirmEdit = function(){
		var parameter = $scope.selectedObject.id;
		var parameter2 = $scope.client;
		if(!parameter2.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("eName").focus();
			return;
		}
		else if(!parameter2.city){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the City!';
			document.getElementById("eCity").focus();
			return;
		}
		else {
			clientAPI.patch(parameter, parameter2).then(function(){
				$scope.selectedObject = null;
				$scope.modalTitle = null;
				$scope.error = false;
				$('#editModal').modal('hide');
				refresh();	
			});
		}
	}
	
	///////////////////////////////////////////
	//OBRIGATORY FUNCTIONS
	///////////////////////////////////////////
	
	$scope.location = function(){
		location.href ="root.html";
	}
	
	$scope.selectObject = function(obj){
		$scope.selectedObject = obj;
	}
	
}])
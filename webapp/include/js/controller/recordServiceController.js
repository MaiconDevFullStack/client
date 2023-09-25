var app = angular.module("recordService",[]).controller("recordServiceController",['$scope', 'serviceAPI', function($scope, serviceAPI){

	
	$scope.services = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	
	
	refresh();
	
	function refresh(){
		
		serviceAPI.get().then(function(response){
			$scope.services = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			$scope.lengthCity = $scope.services.length;
		});
		
	}
	
	$scope.btnInsert = function(){
		$scope.service = {};
		$scope.modalMessage = null;
		$scope.error = false;
		$scope.selectedObject = null;
		$scope.modalTitle = 'Insert Service';
		$(document).ready(function() {
			$('#insertModal').modal();
		});
	}
	
	$scope.insertService = function(service){
		if(!service.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("iName").focus();
			return;
		}
		else if(!service.codeBar){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Code!';
			document.getElementById("iCode").focus();
			return;
		}
		else if(!service.description){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Description!';
			document.getElementById("iDescription").focus();
			return;
		}
		else if(!service.costSale){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Price!';
			document.getElementById("iPrice").focus();
			return;
		}
		else {
			serviceAPI.post(service).then(function(){
				delete $scope.service;
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
			$scope.modalTitle = 'Delete Service';
			$scope.modalMessageObject = $scope.selectedObject.name;
			$(document).ready(function() {
				$('#deleteModal').modal();
			});
		}
	}
	
	$scope.deleteService = function(){
		var parameter = $scope.selectedObject.id; 
		serviceAPI.delete(parameter).then(function(){
			$scope.selectedObject = null;
			$scope.modalTitle = null;
			$scope.modalMessageObject = null;
			$('#deleteModal').modal('hide');
			refresh();	
		});
	}
	
	$scope.edit = function(service){
		//insert data solution
		$scope.service = angular.copy(service);
		if($scope.service.expDate){
			$scope.service.expDate = new Date($scope.service.expDate);
		}
		
		$scope.modalTitle = 'Edit Service';
		$(document).ready(function() {
			$('#editModal').modal();
		});
	}
	
	$scope.confirmEdit = function(){
		var parameter = $scope.selectedObject.id;
		var parameter2 = $scope.service;
		
		if(!parameter2.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("eName").focus();
			return;
		}
		else if(!parameter2.description){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Description!';
			document.getElementById("eDescription").focus();
			return;
		}
		else if(!parameter2.costSale){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Price!';
			document.getElementById("ePrice").focus();
			return;
		}
		else {
			serviceAPI.put(parameter, parameter2).then(function(){
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
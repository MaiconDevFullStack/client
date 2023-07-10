var app = angular.module("recordProduct",[]).controller("recordProductController",['$scope', 'productAPI', function($scope, productAPI){

	
	$scope.products = [];
	$scope.modalMessage = null;
	$scope.error = false;
	$scope.modalMessageObject = null;
	$scope.modalTitle = null;
	
	
	refresh();
	
	function refresh(){
		
		productAPI.get().then(function(response){
			$scope.products = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			$scope.lengthCity = $scope.products.length;
		});
		
	}
	
	$scope.btnInsert = function(){
		$scope.product = {};
		$scope.modalMessage = null;
		$scope.error = false;
		$scope.selectedObject = null;
		$scope.modalTitle = 'Insert Product';
		$(document).ready(function() {
			$('#insertModal').modal();
		});
	}
	
	$scope.insertProduct = function(product){
		if(!product.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("iName").focus();
			return;
		}
		else if(!product.codeBar){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Code Bar Number!';
			document.getElementById("iCodeBar").focus();
			return;
		}
		else if(!product.description){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the Description!';
			document.getElementById("iDescription").focus();
			return;
		}
		else if(!product.costPrice){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the Cost Price!';
			document.getElementById("iCostPrice").focus();
			return;
		}
		else if(!product.costSale){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the Cost of Sale!';
			document.getElementById("iCostSale").focus();
			return;
		}
		else if(!product.expDate){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the Expiration Date!';
			document.getElementById("iExpDate").focus();
			return;
		}
		else {
			productAPI.post(product).then(function(){
				delete $scope.product;
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
			$scope.modalTitle = 'Delete Product';
			$scope.modalMessageObject = $scope.selectedObject.name;
			$(document).ready(function() {
				$('#deleteModal').modal();
			});
		}
	}
	
	$scope.deleteProduct = function(){
		var parameter = $scope.selectedObject.id; 
		productAPI.delete(parameter).then(function(){
			$scope.selectedObject = null;
			$scope.modalTitle = null;
			$scope.modalMessageObject = null;
			$('#deleteModal').modal('hide');
			refresh();	
		});
	}
	
	$scope.edit = function(product){
		//insert data solution
		$scope.product = angular.copy(product);
		$scope.modalTitle = 'Edit Product';
		$(document).ready(function() {
			$('#editModal').modal();
		});
	}
	
	$scope.confirmEdit = function(){
		var parameter = $scope.selectedObject.id;
		var parameter2 = $scope.product;
		if(!parameter2.name){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Name!';
			document.getElementById("eName").focus();
			return;
		}
		else if(!parameter2.codeBar){
			$scope.error = true;
			$scope.modalMessage = 'Please Insert the Code Bar Number!';
			document.getElementById("eCodeBar").focus();
			return;
		}
		else if(!parameter2.description){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the Description!';
			document.getElementById("eDescription").focus();
			return;
		}
		else if(!parameter2.costPrice){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the Cost Price!';
			document.getElementById("eCostPrice").focus();
			return;
		}
		else if(!parameter2.costSale){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the Cost of Sale!';
			document.getElementById("eCostSale").focus();
			return;
		}
		else if(!parameter2.expDate){
			$scope.error = true;
			$scope.modalMessage = 'Please Select the Expiration Date!';
			document.getElementById("eExpDate").focus();
			return;
		}
		else {
			productAPI.patch(parameter, parameter2).then(function(){
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
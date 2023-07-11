var app = angular.module('cash',['recordProduct']).controller('cashController',['$scope', 'cashAPI', 'productAPI', function($scope, cashAPI, productAPI){
	
	$scope.products = [];
	$scope.sale = {};
	$scope.sale.product = [];
	$scope.modalTitle = null;
	$scope.modalMessage = null;
	$scope.modalObject = null;
	
	retrieveProducts();
	
	function retrieveProducts(){
		productAPI.get().then(function(response){
			$scope.products = response.data;
		});
	}
	
	//IMPLEMENTNG SALE
	$scope.btnInsert = function(codeBar){
		
		$scope.sale.totalSale = 0;
		
		for(a in $scope.products){
			if(codeBar == $scope.products[a].codeBar){
				$scope.sale.product.push($scope.products[a]);
			}	
		}
		
		for(b in $scope.sale.product){
			$scope.sale.totalSale = $scope.sale.totalSale + $scope.sale.product[b].costSale; 
		}
	}
	
	$scope.btnFinishSale = function(){
		$scope.modalMessage = 'Do You Really Want Finish This Sale?';
		$scope.modalObject = 'Total'
		$scope.modalTitle = 'Finish Sale';
		$(document).ready(function() {
			$('#finishModal').modal();
		});
	};
	
	$scope.finishSale = function(){
		$scope.sale.saleDate = new Date();
		
		cashAPI.post($scope.sale).then(function(){
			console.log($scope.sale);
			$scope.modalMessage = null;
			$scope.modalObject = null;
			$scope.modalTitle = null;
			$('#finishModal').modal('hide');
		});
		$scope.sale = null;
		iBarCode = null;
		document.getElementById("iBarCode").focus();
	}	
	
	///////////////////////////////////////////
	//OBRIGATORY FUNCTIONS
	///////////////////////////////////////////
	
	$scope.toggleFullScreen = function() {
		if ((document.fullScreenElement && document.fullScreenElement !== null) ||
			(!document.mozFullScreen && !document.webkitIsFullScreen)) {
			if (document.documentElement.requestFullScreen) {
				document.documentElement.requestFullScreen();
			} else if (document.documentElement.mozRequestFullScreen) {
				document.documentElement.mozRequestFullScreen();
			} else if (document.documentElement.webkitRequestFullScreen) {
				document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
			}
			$scope.maximize = true
		} else {
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
			} else if (document.webkitCancelFullScreen) {
				document.webkitCancelFullScreen();
			}
			$scope.maximize = false
		}
	}
	
	$scope.location = function(){
		location.href ="root.html";
	}
	
	$scope.selectObject = function(obj){
		$scope.selectedObject = obj;
	}
}]);
var app = angular.module('cash',['recordProduct']).controller('cashController',['$scope', 'cashAPI', 'productAPI', function($scope, cashAPI, productAPI){
	
	$scope.products = [];
	$scope.sale = [];
	
	retrieveProducts();
	
	function retrieveProducts(){
		productAPI.get().then(function(response){
			$scope.products = response.data;
		});
	}
	
	//IMPLEMENTNG SALE
	$scope.btnInsert = function(codeBar){
		
		$scope.totalSale = 0;
		
		for(a in $scope.products){
			if(codeBar == $scope.products[a].codeBar){
				$scope.sale.push($scope.products[a]);
				console.log($scope.sale);
			}	
		}
		
		for(b in $scope.sale){
			$scope.totalSale = $scope.totalSale + $scope.sale[b].costSale; 
		}
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
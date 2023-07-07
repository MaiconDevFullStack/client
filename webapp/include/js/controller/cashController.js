var app = angular.module('cash',['recordProduct']).controller('cashController',['$scope', 'cashAPI', 'productAPI', function($scope, cashAPI, productAPI){
	
	
	//IMPLEMENTNG SALE
	$scope.btnInsert = function(){
		$scope.sale = {};
		
		productAPI.get(parameter).then(function(response){
			
		});
		
	}	
	
	
	
	$scope.location = function(){
		location.href ="root.html";
	}
	
	$scope.selectObject = function(obj){
		$scope.selectedObject = obj;
	}
}]);
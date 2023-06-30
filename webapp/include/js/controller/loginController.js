var app = angular.module('login', []);
app.controller('loginController', function($scope, $http){
	
	$scope.acess = [{user:"MAICON", password:"123"},{user:"JOAO", password:"123"}];
	
	$scope.validLogin = function(ac){
		for(a in $scope.acess){
			if(ac.user === $scope.acess[a].user && ac.password === $scope.acess[a].password){
				console.log("ENTER");
				return;
			}
			else {
				console.log("ERROR");
				return;
			}
		}
	}
	
});

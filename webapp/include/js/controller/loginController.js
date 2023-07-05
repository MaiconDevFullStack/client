var app = angular.module('login', []).controller('loginController', function($scope, loginAPI){
	
	$scope.users = [];
	
	$scope.validLogin = function(user){
		
		loginAPI.get().then(function(response){
			$scope.users = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			
			debugger;
			
			for(a in $scope.users){
				if(user != $scope.users[a]){
					console.log("ENTER");
					location.href ="root.html";
				}
				else {
					console.log("ERROR");
				}
			}
			
		});
		
	}
	
});

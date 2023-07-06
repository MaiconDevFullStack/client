var app = angular.module('login', []);
app.controller('loginController',['$scope', 'loginAPI', function($scope, loginAPI){
	
	$scope.users = [];
	
	$scope.validLogin = function(user){
		
		loginAPI.get().then(function(response){
			$scope.users = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			
			for(a in $scope.users){
				if(angular.equals(user, $scope.users[a])){
					console.log("ENTER");
					location.href ="root.html";
					return;
				}
				else {
					console.log(user);
					console.log($scope.users[a]);
					console.log("ERROR");
				}
			}
			
		});
		
	}
	
}]);

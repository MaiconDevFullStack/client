var app = angular.module('login', []);
app.controller('loginController',['$scope', 'loginAPI', function($scope, loginAPI){
	
	$scope.users = [];
	$scope.messageError = null;
	
	$scope.validLogin = function(user){
		
		loginAPI.get().then(function(response){
			$scope.users = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			
			for(b in $scope.users){
				$scope.usersMinified = [{login: $scope.users[b].login, password: $scope.users[b].password}];
			}
			
			for(a in $scope.usersMinified){
				if(angular.equals(user, $scope.usersMinified[a])){
					console.log("ENTER");
					location.href ="root.html";
					return;
				}
				else {
					console.log($scope.usersMinified[a]);
					console.log("ERROR");
				}
			}
		});
		
		$scope.usersMinified = null;
	}
	
	$scope.location = function(){
		location.href ="client.html";
	}
}]);

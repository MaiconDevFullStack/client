var app = angular.module('login', []);
app.controller('loginController',['$scope', 'loginAPI', function($scope, loginAPI){
	
	$scope.users = [];
	$scope.messageError = null;
	$scope.usersMinified = [];
	
	$scope.validLogin = function(user){
		
		loginAPI.get().then(function(response){
			$scope.users = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			
			for(b in $scope.users){
				$scope.usersMinified.push({login: $scope.users[b].login, password: $scope.users[b].password});
			}
			
			for(a in $scope.usersMinified)
				if(user === $scope.usersMinified[a]){
				console.log("ENTER");
				console.log(user);
				console.log($scope.usersMinified);
			}
			else{
				console.log("ERROR");
				console.log(user);
				console.log($scope.usersMinified);
			}
			
			/*
			for(a in $scope.usersMinified){
				if(angular.equals(user, $scope.usersMinified[a])){
					console.log("ENTER");
					location.href ="root.html";
					return;
				}
				else {
					console.log($scope.usersMinified[a]);
					refresh();
				}
			}
			*/
		});
		//$scope.usersMinified = null;
	}
	
	function refresh(){
		location.href ="/client";
		$scope.messageError = 'Please Check Login or Password';
		console.log("ERROR", $scope.messageError);
	}
	
	$scope.location = function(){
		location.href ="client.html";
	}
}]);

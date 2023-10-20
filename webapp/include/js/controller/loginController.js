var app = angular.module('login', []);
app.controller('loginController',['$scope', '$rootScope', 'loginAPI', function($scope, $rootScope, loginAPI){
	
	$scope.users = [];
	$scope.messageError = null;
	$scope.usersMinified = [];
	$scope.flag = false;
	$scope.message = '';
	$rootScope.userLog = null;
	
	//refresh();
	
	$scope.validLogin = function(user){
		
		loginAPI.get().then(function(response){
			$scope.users = response.data;
			$scope.modalMessage = null;
			$scope.error = false;
			
			for(n in $scope.users){
				if($scope.users[n].login == user.login && $scope.users[n].pass == user.password){
					console.log($scope.users[n].name);
					$rootScope.userLog = $scope.users[n].name;
					$scope.flag = false;
					$scope.message = '';
					location.href ="root.html";
					console.log($rootScope.userLog);
				}
				else{
					$scope.message = 'Usuário ou Senha incorretos'
					$scope.flag = true;
				}
			}
		});
	}
	
	function preAtivador() {
		console.log(location);
		
		if(location.pathname = "/client/index.html"){
			$scope.flag = true;
			console.log($scope.flag);
		}
		
		if(location.href != 'http://localhost:8080/client/index.html'){
			location.href ="http://localhost:8080/client";
		}
	}	
		

	function refresh(){
		preAtivador()
	}
	
	
	$scope.location = function(){
		location.href ="client.html";
	}
}]);

var app = angular.module("root",[]).controller("rootController", ["$scope", '$rootScope', function($scope, $rootScope){
	$scope.userLog = $rootScope.userLog
	$scope.loadScreen = true;
	
	$scope.loadScreen = false;
	
	$scope.location = function(){
		location.href ="index.html";
	}
	console.log($scope.userLog);
}]);
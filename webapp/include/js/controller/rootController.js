var app = angular.module("root",[]).controller("rootController", ["$scope", '$rootScope', function($scope, $rootScope){
	$scope.userLog = $rootScope.userLog
	
	$scope.location = function(){
		location.href ="index.html";
	}
	console.log($scope.userLog);
}]);
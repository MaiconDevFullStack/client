var app = angular.module("root",[]).controller("rootController", ["$scope", '$rootScope', function($scope, $rootScope){
	$scope.location = function(){
		location.href ="index.html";
	}
	console.log($rootScope.userLog);
}]);
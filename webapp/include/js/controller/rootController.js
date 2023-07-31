var app = angular.module("root",[]).controller("rootController", ["$scope", function($scope){
	$scope.location = function(){
		location.href ="index.html";
	}
}]);
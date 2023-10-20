var app = angular.module('constructDataBase', []).controller('constructDataBaseController', function($scope, constructDataBaseAPI){
	
	
	$scope.btnCreate = function(){
		constructDataBaseAPI.post().then(function(response){
			
		});
	}
	
	$scope.location = function(){
		location.href ="root.html";
	}
});
angular.module('root').config(function($routeProvider){
	$routeProvider.when('/state', {
		templateUrl: 'recordState.html',
		controller: 'recordStateController'
	});
	$routeProvider.otherwise({redirectTo:'/'});
});
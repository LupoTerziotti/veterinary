var app = angular.module('veterinary', ['ngRoute']);


app.config(function($routeProvider) {
	$routeProvider
		.otherwise({
			redirectTo: '/home',
			controller: 'homeController'
		});
});
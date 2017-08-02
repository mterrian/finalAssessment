// Add module here.
var app = angular.module('myApp');
// Routing goes here.
app.config(function($routeProvider){
	$routeProvider
		.when('/login', {
			templateUrl: '../partials/login.html',
			controller: 'loginCtrl'
		})
		.when('/profile' , {
			templateUrl: '../partials/profile.html',
			controller: 'profileCtrl'
		})
		.otherwise('/login')
})
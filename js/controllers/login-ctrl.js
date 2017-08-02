var app = angular.module('myApp');

// Add module and controller here.
app.controller('loginCtrl', function($scope, loginService){

	$scope.checkLogin = loginService.checkLogin

});
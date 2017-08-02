var app = angular.module('myApp')
// Add module and controller here.
app.controller('profileCtrl', function($scope, loginService){
	
	$scope.userDetails = loginService.getProfile();
	

	
})
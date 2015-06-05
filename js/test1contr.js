var app = angular.module('test1',['restangular']);


 app.config(function(RestangularProvider) {
  RestangularProvider.setBaseUrl('https://api.github.com/');
});

app.controller('test1contr', function($scope, Restangular) {
	$scope.filterText = [];
	$scope.filterText.login = '';
	var gitUsers = Restangular.all('users');
	gitUsers.getList().then(function(users) {
	  $scope.allUsers = users;
	})
});
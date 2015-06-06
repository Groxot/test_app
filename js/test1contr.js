var app = angular.module('test1',['restangular','ngMessages','ui.router']);

app.config(function($stateProvider, $urlRouterProvider, RestangularProvider) {
 RestangularProvider.setBaseUrl('https://api.github.com/');
  $urlRouterProvider.otherwise("/");

  $stateProvider
    .state('test1', {
      url: "/test1",
      templateUrl: "test1.html",
	  resolve:{
         allUsers:  function(Restangular){
			return Restangular.all('users').getList().then(function(users) {
			  return users; 
			})       
		 }
	   },
	    controller:"test1contr"
	})
    .state('test2', {
      url: "/test2",
      templateUrl: "test2.html",
	  controller:"test2contr",
    })
});

app.controller('test1contr', ['$scope', 'allUsers', function($scope, allUsers) {
	$scope.allUsers=allUsers;
	$scope.filterText = [];
	$scope.filterText.login = '';

}]);
app.controller('test2contr', function($scope) {
	 $scope.user = {
		email: "",
		password: "",
		repeat_password: ""
    };
	$scope.passwordLen=8;


});
var compareTo = function() {
	return {
		require: "ngModel",
			scope: {
					otherModelValue: "=compareTo"
				},
			link: function(scope, element, attributes, ngModel) {

				ngModel.$validators.compareTo = function(modelValue) {
						return modelValue == scope.otherModelValue;
					};

				scope.$watch("otherModelValue", function() {
						ngModel.$validate();
					});
				}
	};
};

app.directive("compareTo", compareTo);
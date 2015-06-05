var app = angular.module('test2',['ngMessages']);

app.controller('test2contr', function($scope) {
	 $scope.user = {
		email: "",
		password: "",
		repeat_password: ""
    };
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
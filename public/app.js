'use strict';

angular.module("app", ["ngRoute", "app.neutral"])
	.config(["$routeProvider", function ($routeProvider) {
		$routeProvider
			.otherwise({"redirectTo": "login"});
	}]);

'use strict';

angular.module("app", ["ngRoute", "app.neutral", "app.user"])
	.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		$routeProvider
			.otherwise({"redirectTo": "/"});
	}]);

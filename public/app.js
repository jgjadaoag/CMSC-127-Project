'use strict';

angular.module("app", ["ngRoute", "app.neutral"])
	.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		$routeProvider
			.otherwise({"redirectTo": "/"});
	}]);

'use strict';

angular.module("app", ["ngRoute", "app.neutral", "app.student", "app.teacher"])
	.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		$routeProvider
			.otherwise({"redirectTo": "/"});
	}]);

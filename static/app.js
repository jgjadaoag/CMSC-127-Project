'use strict';

angular.module("app", ["ngRoute"])
	.controller("userCtrl", ["$scope", function ($scope) {
		$scope.user = false;
	}])
	.controller("loginCtrl", ["$scope", "$http", function ($scope, $http) {
		$scope.username = "";
		$scope.password = "";
		$scope.submit = function () {
			$http.post("/",  {"studentno": $scope.username, "password": $scope.password})
				.success(function() {
					console.log("Login success");
				});
		};
	}])
	.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		$routeProvider
			.when("/login", {
				"controller": "loginCtrl",
				"templateUrl": "views/login.html"
			})
			.when("/student-sign-up", {
				"controller": "",
				"templateUrl": "views/student-sign-up.html"
			})
			.when("/teacher-sign-up", {
				"controller": "",
				"templateUrl": "views/teacher-sign-up.html"
			})
			.otherwise({"redirectTo": "/login"});
	}]);

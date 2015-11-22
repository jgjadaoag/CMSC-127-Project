'use strict';

angular.module("app", ["ngRoute", "app.neutral", "app.user"])
	.controller("joinGroupCtrl", ["$scope", "$http", function ($scope, $http) {
		console.log("join-group");
		$scope.code = "";
		$scope.submit = function () {
			$http.post("/",  {"portal": $scope.code})
				.success(function() {
					console.log("join-group success");
				});
		};
	}])
	.controller("groupCtrl", ["$scope", "$http", function ($scope, $http){
		console.log("group");

	}])
	.config(["$routeProvider", "$locationProvider", function ($routeProvider, $locationProvider) {
		$routeProvider
			.when("/join-group", {
				"controller": "",
				"templateUrl": "views/student/join-group.html"
			})
			.when("/group",{
				"controller": "groupCtrl",
				"templateUrl": "views/groups.html"
			})
			.otherwise({"redirectTo": "/feed"});
	}]);

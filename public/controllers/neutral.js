'use strict';

var neutral = angular.module("app.neutral", ["ngRoute"]);

neutral.factory("PostService", function() {
	var posts = [
	{
		"user": {
			"profPic": "img/profpic2.jpg"
		},
		"class": {
			"name": "Fashion 1",
			"portal": "groups.html",
		},
		"body": "Sed hendrerit elementum molestie. Maecenas tortor neque, tristique et varius sed, blandit eget eros. Etiam metus massa, consectetur nec nulla sed, commodo consequat felis. Pellentesque nibh diam, volutpat blandit odio sed, viverra sollicitudin nulla. Sed ac facilisis tellus. Pellentesque...."
	},
	{
		"user": {
			"profPic": "img/profpic2.jpg"
		},
		"class": {
			"name": "Lorem Ipsum 127",
			"portal": "groups.html",
		},
		"body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus quis nulla neque. Suspendisse in urna eu felis efficitur sodales sit amet vel sapien. Aenean rutrum, turpis ut eleifend semper, augue felis pulvinar arcu, a elementum justo neque ut risus. Praesent id posuere ...."
	},
	{
		"user": {
			"profPic": "img/profpic2.jpg"
		},
		"class": {
			"name": "Sex Education",
			"portal": "groups.html",
		},
		"body": "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In sagittis eget ipsum ut consequat. Aliquam vel mauris et mauris faucibus accumsan a a lorem. Fusce malesuada bibendum semper. Aenean venenatis non dolor non lobortis. Nunc ornare finibus mi."
	},
	{
		"user": {
			"profPic": "img/profpic2.jpg"
		},
		"class": {
			"name": "Fashion 11",
			"portal": "groups.html",
		},
		"body": "sagittis ullamcorper lobortis. Sed ac tortor ac mi iaculis egestas et eget lorem. Aenean in diam leo. Morbi et cursus augue, et venenatis enim"
	}
	];

	return {
		getAll: function() {
			return posts;
		},
		getFirst: function() {
			return users[0];
		}
	};
});

neutral.factory("UserService", ["$http", function($http) {
	/*
	var user = {
		"name": "Angec Carrasco",
		"idNumber": "2013-39123",
		"profPic": "img/profpic1.jpg"
	};

	$http.get("/info").success(function(data) {
		user =  data;
		console.log(user);
	});
	*/

	return {
		getUserSession: function() {
			return $http.get("/info");;
		}
	};
}]);

neutral.factory("ClassService", function() {
	var group = {
		"portal": "1",
		"description": "This is spartan training",
		"section": "ab-1l",
		"coursecode": "SPRTA 1",
		"teacheremployee": "1234567890"
	};

	return {
		getClass: function() {
			return group;
		}
	};
});

neutral.controller("streamCtrl", ["$scope", "PostService", function($scope, PostService) {
	$scope.nameLimit = 20;
	$scope.postTextLimit = 250;
	$scope.posts = PostService.getAll();
}]);

neutral.controller("userCtrl", ["$scope", "UserService", function($scope, UserService) {
	$scope.user = {};
	var handleSuccess = function(data, status) {
		$scope.user = data;
	};
	UserService.getUserSession().success(handleSuccess);
}]);

neutral.controller("classCtrl", ["$scope", "ClassService", function($scope, ClassService) {
	$scope.group = ClassService.getClass();
}]);


neutral.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/feed", {
			"controller": "",
			"templateUrl": "/user/views/feed.html"
		})
		.when("/class/:classid", {
			"controller": "classCtrl",
			"templateUrl": "/user/views/groups.html"
		})
		.when("/settings", {
			"controller": "",
			"templateUrl": "/user/views/settings.html"
		})
		.when("/class/:classid/students", {
			"controller": "",
			"templateUrl": "/user/views/view-students.html"
		})
		.when("/class/:groupid/files/:fileid", {
			"controller": "",
			"templateUrl": "/user/views/view-file.html"
		});
}]);


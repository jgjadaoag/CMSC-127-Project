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

neutral.factory("UserService", function() {
	var user = {
		"name": "Angec Carrasco",
		"idNumber": "2013-39123",
		"profPic": "img/profpic1.jpg"
	};

	return {
		getUser: function() {
			return user;
		}
	};
});

neutral.controller("streamCtrl", ["$scope", "PostService", function($scope, PostService) {
	$scope.nameLimit = 20;
	$scope.postTextLimit = 250;
	$scope.posts = PostService.getAll();
}]);

neutral.controller("sideCtrl", ["$scope", "UserService", function($scope, UserService) {
	$scope.user = UserService.getUser();
}]);

neutral.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/feed", {
			"controller": "",
			"templateUrl": "/views/feed.html"
		})
		.when("/group/:groupid", {
			"controller": "",
			"templateUrl": "/views/groups.html"
		});
}]);


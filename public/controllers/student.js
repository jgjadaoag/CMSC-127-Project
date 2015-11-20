var student = angular.module("app.student", ["ngRoute"]);

student.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/enroll", {
			"controller": "",
			"templateUrl": "/user/views/student/join-group.html"
		})
		.when("/class/:classid/requirement/:requirementid", {
			"controller" : "",
			"templateUrl": "/user/views/student/req-student.html"
		});
}]);

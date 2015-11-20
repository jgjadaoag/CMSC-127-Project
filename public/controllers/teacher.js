var teacher = angular.module("app.teacher", ["ngRoute"]);

teacher.factory("RequirementService", function() {
	var requirements = [{"student":{"idNumber":"2013-92867"},"dateSubmitted":"08/05/2015","url":"#","grade":"9"},{"student":{"idNumber":"2013-09576"},"dateSubmitted":"08/07/2015","url":"#","grade":"11"},{"student":{"idNumber":"2014-79830"},"dateSubmitted":"08/09/2015","url":"#","grade":"8"},{"student":{"idNumber":"2012-68217"},"dateSubmitted":"08/25/2015","url":"#","grade":"6"},{"student":{"idNumber":"2010-34859"},"dateSubmitted":"08/06/2015","url":"#","grade":"9"},{"student":{"idNumber":"2019-09876"},"dateSubmitted":"","url":"","grade":""},{"student":{"idNumber":"1999-34869"},"dateSubmitted":"06/07/2015","url":"#","grade":"10"},{"student":{"idNumber":"1877-12957"},"dateSubmitted":"08/05/2015","url":"#","grade":"20"}];

	return {
		getAll: function() {
			return requirements;
		}
	};
});

teacher.factory("StudentGradeService", function() {
	var studentGrades = [{"student":{"name":"Angelica Carrasco"},"grade":"92%"},{"student":{"name":"Juan dela Cruz"},"grade":"60%"},{"student":{"name":"Cacai Esguerra"},"grade":"90%"},{"student":{"name":"Dingdong Dantes"},"grade":"10%"}];

	return {
		getAll: function() {
			return studentGrades;
		}
	};
});

teacher.factory("RequirementListService", function () {
	var requirementList = [
	{
		"name": "Exercise 4",
		"maxGrade": 10
	}
	];

	return {
		getAll: function() {
			return requirementList;
		}
	};
});


teacher.controller("requirementsCtrl", ["$scope", "RequirementService", function($scope, RequirementService) {
	$scope.requirements = RequirementService.getAll();
}]);

teacher.controller("studentGradeCtrl", ["$scope", "StudentGradeService", function($scope, StudentGradeService) {
	$scope.studentGrades = StudentGradeService.getAll();
}]);

teacher.controller("requirementListCtrl", ["$scope", "RequirementListService", function($scope, RequirementListService) {
	$scope.requirementList = RequirementListService.getAll();
}]);

teacher.config(["$routeProvider", function($routeProvider) {
	$routeProvider
		.when("/create-class", {
			"controller": "",
			"templateUrl": "/user/views/teacher/create-group.html"
		})
		.when("/class/:classid/requirement/create", {
			"controller": "",
			"templateUrl": "/user/views/teacher/create-requirement.html"
		})
		.when("/class/:classid/equirement/:requirementid", {
			"controller": "",
			"templateUrl": "/user/views/teacher/req-prof.html"
		})
		.when("/class/:classid/upload", {
			"controller": "",
			"templateUrl": "/user/views/teacher/upload-file.html"
		})
		.when("/class/:classid/grades", {
			"controller": "",
			"templateUrl": "/user/views/teacher/view-grades.html"
		})
		.when("/class/:classid/equirement/", {
			"controller" : "",
			"templateUrl": "/user/views/teacher/view-requirements.html"
		});
}]);

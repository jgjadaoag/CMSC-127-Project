var teacher = angular.module("teacher", []);

teacher.factory("RequirementService", function() {
	var requirements = [{"student":{"idNumber":"2013-92867"},"dateSubmitted":"08/05/2015","url":"#","grade":"9"},{"student":{"idNumber":"2013-09576"},"dateSubmitted":"08/07/2015","url":"#","grade":"11"},{"student":{"idNumber":"2014-79830"},"dateSubmitted":"08/09/2015","url":"#","grade":"8"},{"student":{"idNumber":"2012-68217"},"dateSubmitted":"08/25/2015","url":"#","grade":"6"},{"student":{"idNumber":"2010-34859"},"dateSubmitted":"08/06/2015","url":"#","grade":"9"},{"student":{"idNumber":"2019-09876"},"dateSubmitted":"","url":"","grade":""},{"student":{"idNumber":"1999-34869"},"dateSubmitted":"06/07/2015","url":"#","grade":"10"},{"student":{"idNumber":"1877-12957"},"dateSubmitted":"08/05/2015","url":"#","grade":"20"}];

	return {
		getAll: function() {
			return requirements;
		}
	};
});

teacher.controller("requirementsCtrl", ["$scope", "RequirementService", function($scope, RequirementService) {
	$scope.requirements = RequirementService.getAll();
}]);

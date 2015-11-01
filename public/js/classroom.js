var classroom = angular.module("classroom", []);

classroom.factory("StudentService", function() {
	var students = 
	[{"name":"Juan dela Cruz","idNumber":"2013-92867","degree":"BS Computer Science"},{"name":"Joseph Adaoag","idNumber":"2013-09576","degree":"BS Statistics"},{"name":"Angelica Carrasco","idNumber":"2014-79830","degree":"BS Applied Physics"},{"name":"Cacai Esguerra","idNumber":"2012-68217","degree":"BS Agriculture"},{"name":"Graceal Villamor","idNumber":"2010-34859","degree":"BS Computer Science"},{"name":"Prince Karlo Aragones","idNumber":"2019-09876","degree":"BS Nutrition"},{"name":"Dingdong Dantes","idNumber":"1999-34869","degree":"BS Civil Engineering"},{"name":"Jose Protacio Rizal Mercado","idNumber":"1877-12957","degree":"BS Applied Physics"},{"name":"Juan dela Cruz","idNumber":"2013-92867","degree":"BS Computer Science"},{"name":"Joseph Adaoag","idNumber":"2013-09576","degree":"BS Statistics"},{"name":"Angelica Carrasco","idNumber":"2014-79830","degree":"BS Applied Physics"},{"name":"Cacai Esguerra","idNumber":"2012-68217","degree":"BS Agriculture"},{"name":"Graceal Villamor","idNumber":"2010-34859","degree":"BS Computer Science"},{"name":"Prince Karlo Aragones","idNumber":"2019-09876","degree":"BS Nutrition"},{"name":"Dingdong Dantes","idNumber":"1999-34869","degree":"BS Civil Engineering"},{"name":"Jose Protacio Rizal Mercado","idNumber":"1877-12957","degree":"BS Applied Physics"},{"name":"Juan dela Cruz","idNumber":"2013-92867","degree":"BS Computer Science"},{"name":"Joseph Adaoag","idNumber":"2013-09576","degree":"BS Statistics"},{"name":"Angelica Carrasco","idNumber":"2014-79830","degree":"BS Applied Physics"},{"name":"Cacai Esguerra","idNumber":"2012-68217","degree":"BS Agriculture"},{"name":"Graceal Villamor","idNumber":"2010-34859","degree":"BS Computer Science"},{"name":"Prince Karlo Aragones","idNumber":"2019-09876","degree":"BS Nutrition"},{"name":"Dingdong Dantes","idNumber":"1999-34869","degree":"BS Civil Engineering"},{"name":"Jose Protacio Rizal Mercado","idNumber":"1877-12957","degree":"BS Applied Physics"}];


	return {
		getAll: function() {
			return students;
		}
	};
});


classroom.controller("studentListCtrl", ["$scope", "StudentService", function($scope, StudentService) {
	$scope.students = StudentService.getAll();
}]);

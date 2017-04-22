var app = angular.module('myApp');

app.controller('ProjectPageController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $scope.projects = [];
  $scope.index = $routeParams.index;

  $http({method: 'GET', url: 'json/projects.json'}).success(function(response) {
    $scope.projects = response.projects;
    $scope.project = $scope.projects[$scope.index];
  });
}]);

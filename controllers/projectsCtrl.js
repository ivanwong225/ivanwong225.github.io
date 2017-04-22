var app = angular.module('myApp');

app.controller('ProjectController', ['$scope', '$http', 'streamFactory', function($scope, $http, streamFactory) {

  $scope.projectList = [];
  $scope.projects = [];
  $http({method: 'GET', url: 'json/projects.json'}).success(function(response) {
    $scope.projectList = response.projects;
    streamFactory.addToView($scope.projectList, 
                          $scope.projects, 
                          $scope.projectList.length, 
                          2, 0);
  });
}]);

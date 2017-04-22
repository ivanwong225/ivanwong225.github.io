var app = angular.module('myApp');

app.factory('eventsFactory', ['$q', '$http', 'filterFilter', function ($q, $http, filterFilter) {
  var service = {};

  service.getEvents = function (path) {
    return $http.get(path).then(function (response) {
      return response.data.events;
    });
  };

  service.getFood = function(path) {
    return $http.get(path).then(function (response) {
      return filterFilter(response.data.events, {category:'food'});
    });
  };

  service.getPlaces = function(path) {
    return $http.get(path).then(function (response) {
      return filterFilter(response.data.events, {category:'place'});
    });
  };
  
  return service;
}]);

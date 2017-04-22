var app = angular.module('myApp');

app.controller('StreamController', ['$scope', '$http', 'primaryFactory', 'events', 'photoFactory', 'filterFilter', function($scope, $http, primaryFactory, primary, photoFactory, filterFilter) {
  $scope.rowSize = 2;
  $scope.primary = primary;
   // filterFilter(events, {category:'food'});

  $scope.viewable = [];
  var initCap = $scope.events.length > 6 ? 6 : $scope.primary.length;
  photoFactory.addToView($scope.primary, $scope.viewable, initCap, $scope.rowSize, 0);

  $scope.isSelected = function(viewRow, viewIndex, imageIndex) {
    return $scope.viewable[viewRow][viewIndex].selected == imageIndex;
  };

  $scope.select = function(viewRow, viewIndex, imageIndex) {
    console.log(viewRow + ":" + viewIndex + ", " + imageIndex);
    $scope.viewable[viewRow][viewIndex].selected = imageIndex;
  };

  $scope.loadMore = function() {
    var offset = $scope.rowSize * $scope.viewable.length
    if(offset < $scope.primary.length) {
      photoFactory.addToView($scope.events, $scope.viewable, 2, $scope.rowSize, offset);
    }
  };
}]);

var app = angular.module('myApp');

app.factory('streamFactory', function() {
  var service = {};

  service.addToView = function(source, viewArray, numberToAdd, rowSize, offset) {
    var row = [];
    for(i = offset; i < offset + numberToAdd; i++) {
      row.push(source[i]);
      if(row.length === rowSize) {
        viewArray.push(row);
        row = [];
      }
    }
    if(row.length !== 0) {
      viewArray.push(row);
    }
  };

  return service;
});

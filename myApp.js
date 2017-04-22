var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'view/home.html',
      controller  : 'HomeController'
    })
    .when('/myself/projects', {
      templateUrl : 'view/projects.html',
      controller  : 'ProjectController'
    })
    .when('/myself/projects/:index', {
      templateUrl : 'sourcetemps/projectpage.html',
      controller  : 'ProjectPageController'
    })
    .when('/myself/school', {
      templateUrl : 'view/school.html'
    })
    .when('/wibwit', {
      templateUrl : 'sourcetemps/primary.html',
      controller  : 'StreamController',
      resolve : {
        events : function(eventsFactory) {
          return eventsFactory.getEvents('json/events.json');
        }
      }
    })
    .when('/wibwit/food', {
      templateUrl : 'sourcetemps/primary.html',
      controller  : 'StreamController',
      resolve : { 
        events : function(eventsFactory) {
          return eventsFactory.getFood('jsonobjs/primary.json');
        }
      }
    })
    .when('/wibwit/places', {
      templateUrl : 'sourcetemps/primary.html',
      controller  : 'StreamController',
      resolve : { 
        events : function(eventsFactory) {
          return eventsFactory.getPlaces('jsonobjs/primary.json');
        }
      }
    })
    .when('/contact', {
      templateUrl : 'view/contact.html'
    })
});

app.directive('ngScrollFooter', ['$window', '$document', function($window, $document) {
  var top = $window.pageYOffset;

  return {
    scope: {
      trigger: '&ngScrollFooter'
    },
    link: function (scope, element, attrs) {
      var expressionHandler = scope.trigger();
      var footerHeight = document.getElementById('footer').clientHeight;
      var footerTop;
      var currentBottom;
      console.log(footerHeight);
      $document.bind('scroll', function(){

        currentBottom = $window.pageYOffset + window.innerHeight;
        footerTop = $document[0].body.clientHeight - footerHeight;
        if(currentBottom >= footerTop) {
          expressionHandler();
          scope.$apply();
        }
      });
    }
  }
}]);

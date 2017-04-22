var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl : 'views/home.html',
      controller  : 'HomeController'
    })
    .when('/myself/projects', {
      templateUrl : 'views/projects.html',
      controller  : 'ProjectController'
    })
    .when('/myself/projects/:index', {
      templateUrl : 'templates/projectPage.tpl.html',
      controller  : 'ProjectPageController'
    })
    .when('/myself/school', {
      templateUrl : 'views/school.html'
    })
    .when('/wibwit', {
      templateUrl : 'templates/stream.tpl.html',
      controller  : 'StreamController',
      resolve : {
        events : function(eventsFactory) {
          return eventsFactory.getEvents('json/events.json');
        }
      }
    })
    .when('/wibwit/food', {
      templateUrl : 'templates/stream.tpl.html',
      controller  : 'StreamController',
      resolve : { 
        events : function(eventsFactory) {
          return eventsFactory.getFood('json/events.json');
        }
      }
    })
    .when('/wibwit/places', {
      templateUrl : 'templates/stream.tpl.html',
      controller  : 'StreamController',
      resolve : { 
        events : function(eventsFactory) {
          return eventsFactory.getPlaces('json/events.json');
        }
      }
    })
    .when('/contact', {
      templateUrl : 'views/contact.html'
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

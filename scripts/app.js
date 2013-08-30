'use strict';

angular.module('mygameApp', [])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {        
		templateUrl: 'views/game.html',
        controller: 'GameCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

'use strict';

angular.module('mygameApp')	
  .controller('GameCtrl', ['$scope', 'game', function ($scope, game) { //or .controller('GameCtrl', function ($scope, game) 
    $scope.game = game;	
  }]);

(function() {
'use strict';

angular.
  module('core.game').
  factory('Game', ['$resource',
    function($resource) {
      return $resource('http://localhost:9000/v1/games/:gameId', {}, {
        query: {
          method: 'GET',
          params: {gameId: ''},
          isArray: true
        },
        update: { 
          method: 'PUT', 
          params: {gameId: '@gameId'},
        }
      });
    },
  ]);
})();
(function() {
'use strict';

angular.
  module('gameCatalogXApp').
  config(['$stateProvider', '$urlRouterProvider',
    function config($stateProvider, $urlRouterProvider) {
      $stateProvider.
        state('game-catalog', {
          url: '/games', 
          template: '<game-catalog></game-catalog>'
        }).
        state('game-summary', 
        {
          url: '/games/:gameId', 
          template: '<game-summary></game-summary>'
        });
        $urlRouterProvider.otherwise('/games');
    }
]).run(['$state', function($state) {

}]);
})();
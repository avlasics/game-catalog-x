(function() {
'use strict';

angular.
  module('gameCatalogXApp').
  component('gameCatalog', {
    templateUrl: 'game-catalog/game-catalog.template.html',
    controller: ['Game', 
      function GameCatalogXController(Game) {
        var vm = this;
        Game.query().$promise.then(function(data) {
          vm.games = data;
        },
        function(error) {
          vm.error = 'An error has occurred - please try again later';
        });

        vm.submit = function() {
          debugger;
          Game.submit();
        }
        vm.orderBy = 'ReleaseDate';
      }
    ]
  });
})();
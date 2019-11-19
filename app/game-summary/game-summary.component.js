(function() {
'use strict';

angular.
  module('gameSummary').
  component('gameSummary', {
    templateUrl: 'game-summary/game-summary.template.html',
    controller: ['$stateParams', 'Game',
      function GameSummaryController($stateParams, Game) {
        var vm = this;
        vm.submitted = false;
        vm.editable = false;
        vm.buttonText = "Edit";
        vm.edit = function() {
          vm.editable = true;
          vm.buttonText = vm.editable == true ? "View" : "Edit";
          vm.error = "";
        };

        vm.submit = function() {
            debugger;
            vm.game.ReleaseDate = vm.ReleaseDate;
            Game.update({"gameId": vm.game.Id }, vm.game).$promise.then(
              function(data) {
                vm.success = "form successfully submitted";
                vm.submitted = true;
                vm.editable = false;
              },
              function(error) {
                vm.error = error.data.Message + " - " + JSON.stringify(error.data.ModelState);
                vm.editable = false;
                vm.submitted = true;
              }
            )
        };


        vm.game = Game.get({gameId: $stateParams.gameId}, function(game) {
            vm.setImage(game.Images[0]);
            vm.ReleaseDate = new Date(game.ReleaseDate);
        });
  
          vm.setImage = function setImage(image) {
            vm.mainImage = image;
          };
      }
    ]
  });
})();
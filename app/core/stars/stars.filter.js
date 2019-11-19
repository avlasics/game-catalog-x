(function() {
'use strict';

angular.
  module('core').
  filter('stars', function() {
    return function(input) {
      var unistars = '';
      switch (input) {
          case 1: 
            unistars = '\u2605\u2606\u2606\u2606\u2606';
            break;
          case 2:
            unistars = '\u2605\u2605\u2606\u2606\u2606';
            break;
          case 3:
            unistars = '\u2605\u2605\u2605\u2606\u2606';
            break;
          case 4:
            unistars = '\u2605\u2605\u2605\u2605\u2606';
            break;
          case 5:
            unistars = '\u2605\u2605\u2605\u2605\u2605';
            break;
      }
      return unistars;
    };
  });
})();

angular
    .module('app')
    .factory('taskFactory', taskFactory);

function taskFactory() {
    return {
        logError: function(msg) {
          /* */
        }
   };
}

(function() {
    'use strict';

  angular
    .module("toDoApp")
    .controller('ToDoController', ToDoController);

      function ToDoController() {
        var vm = this;
        vm.message = "todo message";
      };

})();

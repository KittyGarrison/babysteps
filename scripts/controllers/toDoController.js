(function() {
    'use strict';

  angular
    .module("toDoApp")
    .controller('ToDoController', ToDoController);

      function ToDoController() {
        var vm = this;
        vm.todoText = "";
        vm.todos = [
          {text : "first",
          isComplete : false}
        ];
        vm.addTodo = addTodo;

        function addTodo(text){
          vm.todos.push(new Todo(text));
          vm.todoText = "";
        };

        function Todo(text){
          this.text = text;
          this.isComplete = false;
        };



      };

})();

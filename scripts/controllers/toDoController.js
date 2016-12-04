(function() {
    'use strict';

  angular
    .module("toDoApp")
    .controller('ToDoController', ToDoController);

      function ToDoController() {
        var vm = this;
        vm.todoText = "";
        vm.todos = [];
        vm.addTodo = addTodo;
        vm.complete = complete;

        function addTodo(text){
          vm.todos.push(new Todo(text));
          vm.todoText = "";
        };

        function complete(todo) {
          todo.isComplete = !todo.isComplete
        }

        function Todo(text){
          this.text = text;
          this.isComplete = false;
        };



      };

})();

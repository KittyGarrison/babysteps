(function() {
    'use strict';

  angular
    .module("toDoApp")
    .controller('ListController', ListController);

      function ListController() {
        var vm = this;
        vm.taskText = "";
        vm.taskList = [];
        vm.addTask = addTask;

        function addTask(text){
          vm.taskList.push(new Task(text));
          vm.taskText = "";
        };

        function Task(text){
          this.text = text;
          this.isComplete = false;
          this.editMode = false;
          this.complete = function(){
            this.isComplete = !this.isComplete;
          };
          this.edit = function(){
            this.editMode = true;
          };
          this.updateText = function(newText){
            this.text = newText;
            this.editMode = false;
          };
        };
      };
})();

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
        vm.removeTask = removeTask;

        function addTask(text){
          vm.taskList.push(new Task(text));
          vm.taskText = "";
        };

        function removeTask(task){
          // find the index of the task in taskList and use taskList.splice(index,1) to remove that task
        }

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
          this.updateText = function(){
            this.editMode = false;
          };
        };
      };
})();

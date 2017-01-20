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
        // vm.deleatTask = removeTask(findTask);
        vm.removeTask = removeTask;

        function addTask(text){
          vm.taskList.push(new Task(text));
          vm.taskText = "";
        };


        function removeTask(index){
          console.log("called removeTask");
          vm.taskList.splice(index,1)
        };

        function findTask(id){
          console.log("called find task");
          for (var i = 0; i < vm.taskList.length; i++) {
            if (tasklist[i].id === id){
              return i;}
              else {
              console.log("not in there");
            }
          }
        }

        var count = 100;

        function Task(text){
          function incrementedId(){
            count = count +1;
            return count
          };
          this.id = incrementedId();
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

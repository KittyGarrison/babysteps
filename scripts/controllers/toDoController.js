(function() {
    'use strict';

    angular
        .module("toDoApp")
        .controller('ListController', ListController);

    function ListController() {
        var vm = this;

        var count = 100;

        vm.addTask = addTask;
        vm.removeTask = removeTask;
        vm.taskList = [];
        // this does not need to be here since it is instantiated with ng-model but it seems more clear to
        vm.taskText = "";

        function addTask(text) {
            vm.taskList.push(new Task(text));
            vm.taskText = "";
        };

        function removeTask(task) {
            vm.taskList.splice(findTask(task), 1)
        };

        function findTask(task) {
            return vm.taskList.indexOf(task);
        }

        function incrementedId() {
            count = count + 1;
            return count
        };

        function Task(text) {
            this.id = incrementedId();
            this.text = text;
            this.isComplete = false;
            this.editMode = false;
            this.complete = function() {
                this.isComplete = !this.isComplete;
            };
            this.edit = function() {
                this.editMode = true;
            };
            this.updateText = function() {
                this.editMode = false;
            };
        };
    };
})();

(function () {

    var taskList = {

        templateUrl: "templates/taskList.html",

        controller: function (TaskService) {

            var $ctrl = this;
            
            // Start the form off empty on page load.
            $ctrl.taskList = [];
    
            // Load the cart data on page load.
            loadForm();
    
            // Function on scope called when form is submitted.
            $ctrl.addTask = function(task) {
                TaskService.addTask(task).then(loadForm);
                console.log(task);
                console.log($ctrl.taskList);
            };
    
            // Function on scope called when clicking Delete for an item.
            $ctrl.deleteTask = function(task) {
                TaskService.deleteTask(task.id).then(loadForm);
            };
    
            function loadForm() {
                TaskService.getTasks().then(function(tasks) {
                   // $ctrl.tasks = tasks;
                    console.log(tasks);
                });
            }

            // var $ctrl = this;
            // $ctrl.addTask = function (task) {

            //     if (task) {
            //         $ctrl.taskList.push({
            //             name: task
            //         });
            //         $ctrl.task = "";
            //     };

            // }
            // $ctrl.removeTask = function ($index) {
            //     $ctrl.taskList.splice($index, 1);
            // };

            // $ctrl.taskList = TaskService.getData();
        }
    }

    angular.module("app")
        .component("taskList", taskList);


}());
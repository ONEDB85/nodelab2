(function () {

    var taskList = {

        templateUrl: "templates/taskList.html",

        controller: function (TaskService) {

            const $ctrl = this;
            $ctrl.taskList = [];
            loadForm();

            // Function on scope called when form is submitted.

            $ctrl.addTask = function (task) {
                var thisTask = {
                    task: task
                }
                
                if ($ctrl.task) {
                    $ctrl.task = "";
                    
            
                    TaskService.addTask(thisTask).then(function (task) {

                        loadForm();
                    });
                    
                }
            }
            // Function on scope called when  // 
            $ctrl.deleteTask = (task) => {
                TaskService.deleteTask(task.id).then((response) => {
                    $ctrl.taskList = response.data;
                });
                
            };


            $ctrl.updateTask = (task) => {
                // task.task = editInput.value;
                TaskService.updateTask(task).then((response) => {
                    console.log(response);
                //  $ctrl.taskList = response.data;   
                });
                
                $ctrl.task = "";
                // return $ctrl.taskList = task;
            };


            function loadForm() {
                TaskService.getTasks().then(function (tasks) {
                    $ctrl.taskList = tasks;
                    
                    // console.log($ctrl.taskList);
                });
            }


        }
    }

    angular.module("app")
        .component("taskList", taskList);


}());
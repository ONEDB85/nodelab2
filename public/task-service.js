(function () {

    function TaskService($http) {

        
        this.getTasks = getTasks;
        this.addTask = addTask;
        this.deleteTask = deleteTask;
        this.updateTask = updateTask;
        // this.setData = setData;
        // this.getData = getData;

        function getTasks() {
            return $http({
                method: "GET",
                url: "/tasks"
            }).then(function(response) {
                // console.log(response.data);
                return response.data;
            });
        };

        function addTask(task) {
            return $http({
                method: "POST",
                url: "/tasks",
                data: task
            });
        };
        
        function deleteTask(taskId) {
            return $http({
                method: "DELETE",
                url: "/tasks/" + taskId
            });
        };

        function updateTask(task) {
            console.log(task);
            return $http({
                method: "PUT",
                url: "/tasks/" + task.id,
                data: task
            }).then((response) => { return response.data });
        };


 
    }
    angular
        .module("app")
        .service("TaskService", TaskService);
})();
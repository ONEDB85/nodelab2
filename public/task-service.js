(function () {

    function TaskService($http) {

        
        this.getTasks = getTasks;
        this.addTask = addTask;
        this.deleteTask = deleteTask;
        // this.setData = setData;
        // this.getData = getData;

        function getTasks() {
            return $http({
                method: "GET",
                url: "http://localhost:3000/tasks/"
            }).then(function(response) {
                return response.task;
            });
        };

        function addTask(task) {
            return $http({
                method: "POST",
                url: "http://localhost:3000/tasks/",
                name: task
            });
        };
        
        function deleteTask(taskId) {
            return $http({
                method: "DELETE",
                url: "http://localhost:3000/tasks/" + taskId
            });
        };


        // return {
        //     setData: setData,
        //     getData: getData
        // }

        // function getData() {
        //     return taskList;
        // }

        // function setData(list) {
        //     taskList = list;
        // }
    }
    angular
        .module("app")
        .service("TaskService", TaskService);
})();
(function() {

    angular
      .module("app")
      .config(function($routeProvider) {
        $routeProvider
          .when("/welcome", {
            templateUrl: "templates/welcome.html"
          })
          .when("/form", {
            template: "<task-form></task-form>"
          })
          .otherwise({ redirectTo: "/welcome" });
      });
  })();
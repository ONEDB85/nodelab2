(function () {
    function hoverState() {
        return {
            link: function ($scope, $element, $attrs) {
                $element.on("mouseover", function () {
                    $element.css("cursor", "all-scroll");
                });
            }
        }
    }

    angular
        .module("app")
        .directive("hoverState", hoverState);
})();
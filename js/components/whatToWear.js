// YOUR COMPONENT FOR WHAT TO WEAR IS CREATED IN THIS FILE

(function () {


    var whatToWear = {
        templateUrl: "partials/what-to-wear.html",

        controller: function (WhatToWearService) {


            var $ctrl = this;
            $ctrl.suggestion = {};
            $ctrl.outputSuggestion = function () {
                // console.log("ok");
                WhatToWearService.suggestOutfit($ctrl.suggestion);
                // $ctrl.suggestion = {};
                // console.log($ctrl.suggestion);
            }


        },

        function (WhatToWearService) {


            var $ctrl = this;
            $ctrl.suggestions = WhatToWearService.suggestOutfit();
            console.log($ctrlsuggestions)
        }

    }

    angular.module("wearApp")
        .component("whatToWear", whatToWear);

})();// YOUR COMPONENT FOR WHAT TO WEAR IS CREATED IN THIS FILE


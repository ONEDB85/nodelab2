// Your module NEEDS TO BE LINKED IN THIS FILE

// DO NOT ALTER THE CODE IN THIS FILE, except that you must link
// the service to your module at line 71.

(function() {
  function WhatToWearService() {
    // DO NOT CHANGE THIS FUNCTION
    var userObj = {};

    return {
      suggestOutfit: suggestOutfit
    };

    function suggestOutfit(temperature, eventType) {
        // DO NOT CHANGE THIS FUNCTION
        var tempSuggestion, eventSuggestion;
        if (temperature < 54) {
          tempSuggestion = "a coat";
        } else if (temperature<= 70) {
          tempSuggestion = "a jacket";
        } else {
          tempSuggestion = "no jacket";
        }

        if (eventType === "casual") {
          eventSuggestion = "something comfy";
        } else if (eventType === "formal") {
          eventSuggestion = "a suit";
        } else {
          eventSuggestion = "a polo";
        }

        return "Since it's " + temperature + " degrees and you're going to a " +
               eventType + " event, you should wear " + eventSuggestion +
               " and " + tempSuggestion + ".";
    }
  }

angular
  .module("wearApp")
  .factory("WhatToWearService", WhatToWearService);

  // ONLY ADD ADDITIONAL CODE HERE to link this service to your module.

})();

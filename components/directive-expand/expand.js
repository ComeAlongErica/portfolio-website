"use strict";

function expandOnClick() {
  return {
    restrict: "A",
    link: function($scope, $element, $attrs) {
      $element.on("click", () => {
        $element[0].nextElementSibling.classList.remove("hidden");
      });
    }
  };
}

angular
  .module("App")
  .directive("expandOnClick", expandOnClick);

  //ng-show="$ctrl.showExtended"
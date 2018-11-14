"use strict";

function expandOnClick() {
  return {
    restrict: "A",
    link: function ($scope, $element, $attrs) {
      $element.on("click", () => {
        if ($element[0].tagName === "P") {
          $element[0].parentElement.nextElementSibling.classList.toggle("hidden");
        }
      });
    }
  };
}

angular
  .module("App")
  .directive("expandOnClick", expandOnClick);

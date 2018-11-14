"use strict";

function expandOnClick() {
  return {
    restrict: "A",
    link: function ($scope, $element, $attrs) {
      $element.on("click", () => {
        console.log($element);
        if ($element[0].tagName === "P") {
          console.log($element[0]);
          $element[0].parentElement.nextElementSibling.classList.toggle("hidden");
        }
      });
    }
  };
}

angular
  .module("App")
  .directive("expandOnClick", expandOnClick);

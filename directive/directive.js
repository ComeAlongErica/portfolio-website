"use strict";

function domFun() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {

            // project hover event
            $element.on("mouseenter", () => {
                if ($element[0].tagName === "SECTION") {
                    $element[0].lastElementChild.classList.toggle("hide");
                }
            });
            $element.on("mouseleave", () => {
                if ($element[0].tagName === "SECTION") {
                    $element[0].lastElementChild.classList.toggle("hide");
                }
            });
        }
    };
}

angular
    .module("Portfolio")
    .directive("domFun", domFun);

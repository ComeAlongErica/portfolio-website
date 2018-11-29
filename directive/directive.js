"use strict";

function domFun() {
    return {
        restrict: "A",
        link: function ($scope, $element, $attrs) {

            // project hover event
            $element.on("mouseenter", () => {
                if ($element[0].tagName === "SECTION") {
                    $element[0].lastElementChild.classList.toggle("hide");
                    $element[0].style.height = "175px";
                    $element[0].style.width = "280px";
                }
            });
            $element.on("mouseleave", () => {
                if ($element[0].tagName === "SECTION") {
                    $element[0].lastElementChild.classList.toggle("hide");
                    $element[0].style.height = "";
                    $element[0].style.width = "";
                }
            });
        }
    };
}

angular
    .module("Portfolio")
    .directive("domFun", domFun);

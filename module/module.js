"use strict";

angular
    .module("Portfolio", ["ngRoute", "ngAnimate"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/home", {
            template: "<home></home>"
        })
        .when("/about", {
            template: "<about></about>"
        })
        .when("/contact", {
            template: "<contact></contact>"
        })
        .otherwise({redirectTo:"/home"})
    }])

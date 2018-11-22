"use strict";

angular
    .module("Portfolio", ["ngRoute", "ngAnimate"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/home", {
            template: "<home></home>"
        })
        .when("/projects", {
            template: "<projects></projects>"
        })
        .when("/contact", {
            template: "<contact></contact>"
        })
        .otherwise({redirectTo:"/home"})
    }])

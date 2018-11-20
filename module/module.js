"use strict";

angular
    .module("Portfolio", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
        $routeProvider
        .when("/home", {
            template: "<home></home>"
        })
        .otherwise({redirectTo:"/home"})
    }])

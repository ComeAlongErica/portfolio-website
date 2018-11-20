"use strict";

const home = {
    templateUrl: "components/home/home.html",
    bindings: {},
    controller: ["PortService", function (PortService) {
        const vm = this;

    }]

};


angular.module("Portfolio").component("home", home);
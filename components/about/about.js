"use strict";

const about = {
    templateUrl: "components/about/about.html",
    bindings: {},
    controller: ["PortService", function (PortService) {
        const vm = this;

    }]

};


angular.module("Portfolio").component("about", about);
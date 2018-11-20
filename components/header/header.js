"use strict";

const headerTool = {
    templateUrl: "components/header/header.html",
    bindings: {},
    controller: ["PortService", function (PortService) {
        const vm = this;

    }]

};


angular.module("Portfolio").component("headerTool", headerTool);
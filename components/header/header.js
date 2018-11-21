"use strict";

const headerTool = {
    templateUrl: "components/header/header.html",
    bindings: {},
    controller: ["PortService", function (PortService) {
        const vm = this;
 
    }]

};

//$location.path("/event-list");

angular.module("Portfolio").component("headerTool", headerTool);
"use strict";

const projects = {
    templateUrl: "components/projects/projects.html",
    bindings: {},
    controller: ["PortService", function (PortService) {
        const vm = this;

        vm.projectDisplay = PortService.getProjects();

    }]

};


angular.module("Portfolio").component("projects", projects);
"use strict";

function PortService($location) {
    const self = this;


    self.updateHead = (route) => {

        if (route === "home") {
            $location.path("/home");
        } else if (route === "about") {
            $location.path("/about");
        } else if (route === "contact") {
            $location.path("/contact");
        } else {
            $location.path("/home");
        };

    }

};
angular.module("Portfolio").service("PortService", PortService);

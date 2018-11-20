"use strict";

const contact = {
    templateUrl: "components/contact/contact.html",
    bindings: {},
    controller: ["PortService", function (PortService) {
        const vm = this;

    }]

};


angular.module("Portfolio").component("contact", contact);
"use strict";

const search = {
    templateUrl: "components/search-criteria/search-criteria.html",
    bindings: { passSearch: "&" },
    controller: ["EventService", function (EventService, ) {
        const vm = this;

        // navigates home
        vm.navHome = () => {
            EventService.routeHome();
        };

    }]

}


angular
    .module("App")
    .component("search", search);
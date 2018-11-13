"use strict";

const home = {
    templateUrl: "components/home/home.html",
    bindings: {},
    controller: ["EventService", function(EventService) {
        const vm = this;

        //sends data to service
        vm.passSearch = (search) => {
            // console.log(search.localDate.getFullYear());
            // console.log(search.localDate.getDate());
            // console.log(search.localDate.getMonth() + 1);
            EventService.submitData(search);
        };
    }]
    
};


angular
    .module("App")
    .component("home", home);
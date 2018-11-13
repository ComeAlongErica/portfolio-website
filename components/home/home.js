"use strict";

const home = {
    templateUrl: "components/home/home.html",
    bindings: {},
    controller: ["Service", function(Service) {
        const vm = this;
        //code here por favor
        vm.passSearch = (search) => {
            console.log(search);
        }
    }]
    
};


angular
    .module("App")
    .component("home", home);
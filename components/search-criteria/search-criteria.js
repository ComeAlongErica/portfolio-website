"use strict";

const search = {
    template: `<h1>This is search</h1>`,
    controller: ["Service", function(Service) {
        const vm = this;
        vm.search1 = "Beyonce";
        vm.search2 = "48206";
        vm.search3 =  "2018-11-12";
        Service.searchTicketMaster(vm.search1, vm.search2, vm.search3);
    }]
    
}


angular
    .module("App")
    .component("search",search);
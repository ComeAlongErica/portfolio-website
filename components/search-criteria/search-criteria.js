"use strict";

const search = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ["Service", function(Service) {
        const vm = this;
        vm.search1 = "Beyonce";
        vm.search2 = "48206";
        vm.search3 =  "2018-11-12";
        Service.searchTicketMaster(vm.search1, vm.search2, vm.search3);
        let filler = {
            
        };
    
    }]
    
}


angular
    .module("App")
    .component("search",search);
"use strict";

const search = {
    templateUrl: "components/search-criteria/search-criteria.html",
    controller: ["EventService", function(EventService) {
        const vm = this;
        vm.passSearch = (search) => {
            EventService.submitData(search);
        };
    
    }]
    
}


angular
    .module("App")
    .component("search",search);
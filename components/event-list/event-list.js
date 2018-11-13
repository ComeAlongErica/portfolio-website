"use strict";

const eventList = {
    templateUrl: "components/event-list/event-list.html",
    bindings: {},
    controller: ["EventService", function(EventService){
        const vm = this;
        vm.receivedData = EventService.returnData();
        
        console.log(vm.receivedData);
    }]
    
}


angular
    .module("App")
    .component("eventList",eventList);
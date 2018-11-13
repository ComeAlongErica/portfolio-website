"use strict";

const eventList = {
    templateUrl: "components/event-list/event-list.html",
    bindings: {},
    controller: ["EventService", function(EventService){
        const vm = this;
        let receivedData = EventService.returnData();
        console.log(receivedData);
        
    }]
    
}


angular
    .module("App")
    .component("eventList",eventList);
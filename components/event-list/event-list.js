"use strict";

const eventList = {
    templateUrl: "components/event-list/event-list.html",
    bindings: {},
    controller: ["EventService", function(EventService){
        const vm = this;
        vm.receivedData = EventService.returnData();

        // sends event to save in array
        vm.saveEvent = (event) => {
            console.log(event);
            EventService.saveBucket(event);
        }

        vm.showExtended = false;
        vm.toggleExtended = (event) => {
            console.log(event);
            console.log(vm.showExtended);
            console.log("event: " + event.id)
            console.log("event: " + event.name)
            

            if (vm.showExtended) {
                vm.showExtended = false;
                console.log("set to false");
            } else if (vm.showExtended === false) {
                vm.showExtended = true;
                console.log("set to true");

            }
        }
    }]
    
}


angular
    .module("App")
    .component("eventList",eventList);
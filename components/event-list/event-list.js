"use strict";

const eventList = {
    template: `<h1>This is event list of results</h1>`,
    bindings: {},
    controller: [ function(){
        const vm = this;
        //code here por favor
    }]
    
}


angular
    .module("App")
    .component("eventList",eventList);
"use strict";

const bucketList = {
    templateUrl: "components/bucket-list-page/bucket-list-page.html",
    bindings: {},
    controller: [function() {
        const vm = this;
        //recieves bucket list
        // vm.recieveBucket = EventService.returnBucket();

    }]
    
}


angular
    .module("App")
    .component("bucketList",bucketList);
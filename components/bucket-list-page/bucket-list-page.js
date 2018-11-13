"use strict";

const bucketList = {
    templateUrl: "components/bucket-list-page/bucket-list-page.html",
    bindings: {},
    controller: ["EventService", function(EventService) {
        const vm = this;
        //recieves bucket list
        vm.recieveBucket = EventService.returnBucketList();

        //navigates home when logo is clicked
        vm.navHome = () => {
            EventService.routeHome();
        };
    }]
    
}


angular
    .module("App")
    .component("bucketList",bucketList);
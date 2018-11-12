"use strict";

const bucketList = {
    template: `<h1>This is bucket list page, aka favorites</h1>`,
    bindings: {},
    controller: [function() {
        const vm = this;
        //code here por favor
    }]
    
}


angular
    .module("App")
    .component("bucketList",bucketList);
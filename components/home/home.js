"use strict";

const home = {
    template: `<h1>This is Home</h1>`,
    bindings ={},
    controller: [ function(){
        const vm = this;
        //code here por favor
    }]
    
}


angular
    .module("App")
    .component("home",home);
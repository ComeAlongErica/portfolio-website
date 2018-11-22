"use strict";

const projects = {
    templateUrl: "components/projects/projects.html",
    bindings: {},
    controller: ["PortService", function (PortService) {
        const vm = this;
        vm.projectDisplay = [
            {name: "Project 1", img: "images/event.png", url: "https://github.com/ComeAlongErica/event-scout-event-website"},
            {name: "Project 2", img: "images/todo.png", url: "https://github.com/ComeAlongErica/todo-list-angular-js"},
            {name: "Project 3", img: "images/bioshock.png", url: "https://github.com/ComeAlongErica/bioshock-plasmid-shopping-cart"},
            {name: "Project 3", img: "images/dogthoughts.png", url: "https://github.com/ComeAlongErica/mock-twitter-feed-angular"},
            {name: "Project 3", img: "images/book-contacts.png", url: "https://github.com/ComeAlongErica/js-address-book"},  
        ]

    }]

};


angular.module("Portfolio").component("projects", projects);
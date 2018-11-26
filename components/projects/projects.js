"use strict";

const projects = {
    templateUrl: "components/projects/projects.html",
    bindings: {},
    controller: ["PortService", function (PortService) {
        const vm = this;
        vm.projectDisplay = [
            {name: "Event Scout", img: "images/event.jpg", url: "https://github.com/ComeAlongErica/event-scout-event-website", description: "An event application using TicketMaster API and Angular."},
            {name: "To-Do List", img: "images/todo.jpg", url: "https://github.com/ComeAlongErica/todo-list-angular-js", description: "An Angular application that displays, edits, and deletes to-dos."},
            {name: "Plasmids Shopping Cart", img: "images/bioshock.jpg", url: "https://github.com/ComeAlongErica/bioshock-plasmid-shopping-cart", description: "Shopping cart project using HTML, CSS, JavaScript, and jQuery."},
            {name: "Dog Thoughts Feed", img: "images/dogthought.jpg", url: "https://github.com/ComeAlongErica/mock-twitter-feed-angular", description: "Use components to construct a list of small posts, similar to Twitter."},
            {name: "Address Book", img: "images/book-contacts.jpg", url: "https://github.com/ComeAlongErica/js-address-book", description: "Build an object-oriented console address book application."},  
        ]

    }]

};


angular.module("Portfolio").component("projects", projects);
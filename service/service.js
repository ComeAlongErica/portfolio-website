"use strict";

function PortService($location) {
    const self = this;

    self.projects = [
        {name: "Event Scout", img: "images/event.jpg", url: "https://comealongerica.github.io/event-scout-event-website/#!/home", github: "https://github.com/ComeAlongErica/event-scout-event-website", description: "An event application using TicketMaster API and Angular."},
        {name: "To-Do List", img: "images/todo.jpg", url: "https://comealongerica.github.io/todo-list-angular-js/", github: "https://github.com/ComeAlongErica/todo-list-angular-js", description: "An Angular application that displays, edits, and deletes to-dos."},
        {name: "Plasmids Shopping Cart", img: "images/bioshock.jpg", url: "https://comealongerica.github.io/bioshock-plasmid-shopping-cart/", github: "https://github.com/ComeAlongErica/bioshock-plasmid-shopping-cart", description: "Shopping cart project using HTML, CSS, JavaScript, and jQuery."},
        {name: "Dog Thoughts Feed", img: "images/dogthought.jpg", url: "https://comealongerica.github.io/mock-twitter-feed-angular/", github: "https://github.com/ComeAlongErica/mock-twitter-feed-angular", description: "Use components to construct a list of small posts, similar to Twitter."},
        {name: "Address Book", img: "images/book-contacts.jpg", url: "https://comealongerica.github.io/js-address-book/", github: "https://github.com/ComeAlongErica/js-address-book", description: "Build an object-oriented console address book application."},  
        {name: "Shopping List", img: "images/grocery.jpg", url: "https://grocery-list-fun.herokuapp.com/", github: "https://github.com/ComeAlongErica/shopping-cart-database", description: "Create a database for shopping cart app, with front-end functionality."},  
    ]

    self.getProjects = () => {
        return self.projects;
    }

};
angular.module("Portfolio").service("PortService", PortService);

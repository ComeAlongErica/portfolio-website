"use strict";

function EventService($location, $http) {
    const self = this;
    self.jsonPayload = [];

    self.submitData = (search) => {
        self.searchTicketMaster(search);
        $location.path("/search");
    };

    self.returnData = () => {
        return self.jsonPayload;
    }

    self.searchTicketMaster = (search) => {
        let day = search.localDate.getDate();
        let month = `${search.localDate.getMonth() + 1}`;
        let year = search.localDate.getFullYear();
        
        return $http({
            method: "GET", // Defines the method
            url: `http://app.ticketmaster.com/discovery/v2/events.json?keyword=${search.searchKeyword}&postalCode=${search.postalCode}&localDate=${year}-${month}-${day}&apikey=ibBJCTVGbVNR0NGGSUX7I2MLXS17aVQH` // Defines the URL
        }).then((data) => {
            // This method is what is used to get data from the promise once it has been resolved
            // console.log(data.data._embedded.events);
            console.log(data.data._embedded.events);
            self.jsonPayload = data.data._embedded.events;
            return self.jsonPayload;
        });
    }

};
angular
    .module("App")
    .service("EventService", EventService);

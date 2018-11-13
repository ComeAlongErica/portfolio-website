"use strict";

function EventService($location, $http) {
    const self = this;
    let jsonPayload = null;
    let searchResults;

    self.submitData = (search) => {
        searchResults = search;
        self.searchTicketMaster(search);
        // console.log(searchResults);
    };

    self.searchTicketMaster = (data) => {
        let day = data.localDate.getDate();
        let month = `${data.localDate.getMonth() + 1}`;
        let year = data.localDate.getFullYear();
        
        console.log(month, day, year);

        // console.log("You're in api")
        // console.log(data.searchKeyword);
        // console.log(data.postalCode);
        // console.log(data.localDate);

        return $http({
            method: "GET", // Defines the method

            url: `http://app.ticketmaster.com/discovery/v2/events.json?keyword=${data.searchKeyword}&postalCode=${data.postalCode}&localDate=${year}-${month}-${day}&apikey=ibBJCTVGbVNR0NGGSUX7I2MLXS17aVQH` // Defines the URL
        }).then((data) => {
            // This method is what is used to get data from the promise once it has been resolved
            jsonPayload = data;
            console.log(jsonPayload)
            // Returns the jsonPayload variable
            return jsonPayload;
        });
    }


};
angular
    .module("App")
    .service("EventService", EventService);



    //https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchKeyword}&postalCode=${postalCode}&startDateTime=${startDateTime}&apikey=ibBJCTVGbVNR0NGGSUX7I2MLXS17aVQH//

    //http://app.ticketmaster.com/discovery/v1/events.json?keyword=Madonna&apikey=4dsfsf94tyghf85jdhshwge334&callback=myFunction

    //http://app.ticketmaster.com/discovery/v2/events.json?keyword=${data.searchKeyword}&postalCode=${data.postalCode}&localDate=${year}-${month}-${day}&apikey=ibBJCTVGbVNR0NGGSUX7I2MLXS17aVQH
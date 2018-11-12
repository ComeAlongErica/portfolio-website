"use strict";

function Service($location, $http) {
    const self = this;
    let jsonPayload = null;
    
    self.searchTicketMaster = (searchKeyword, postalCode, localDate) => {
        console.log(searchKeyword);
        console.log(postalCode);
        console.log(localDate);
        return $http({
            method: "GET", // Defines the method
            
            url: `http://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchKeyword}&postalCode=${postalCode}&localDate=${localDate}&apikey=ibBJCTVGbVNR0NGGSUX7I2MLXS17aVQH` // Defines the URL
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
    .service("Service",Service);

    

    //https://app.ticketmaster.com/discovery/v2/events.json?keyword=${searchKeyword}&postalCode=${postalCode}&startDateTime=${startDateTime}&apikey=ibBJCTVGbVNR0NGGSUX7I2MLXS17aVQH//
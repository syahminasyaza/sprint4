
// let searchButton = document.getElementById("submit-btn");
var searchInput1 = document.getElementById("city");
var searchInput3 = document.getElementById("state");
var formattedAddress = document.getElementById("city-name2");
var latitude = document.getElementById("lat");
var longitude = document.getElementById("long");

searchButton.addEventListener("click", findWeatherDetails);
searchInput1.addEventListener("keyup", enterPressed);

function enterPressed(event) {
    if (event.key === "Enter") {
        findWeatherDetails();
        
    }
}

function findWeatherDetails() {

    var api = "https://api.oip.tm.com.my/app/t/tm.com.my/tmgeocoding/1.0/One?q=";
    var key = "&key=RND-trial";
    var format = "&format=json" ;
    

    var sum = api + searchInput1.value.slice(15) + key + format ;

    var request;
    request = new XMLHttpRequest();
    request.open('GET', sum);
    request.setRequestHeader("Accept","application/json");
    request.setRequestHeader("Authorization", "Bearer 9ba68136-652d-3b2e-ab61-72758d11aa26");
    //request.setRequestHeader("Origin","api.oip.tm.com.my");
    request.setRequestHeader("Access-Control-Allow-Origin","*");
    request.onload = function () {

        var data = JSON.parse(this.response);
        
        //output geolocation
        formattedAddress.innerHTML = " " + data.output.formattedAddress; 
        //formattedAddress2.innerHTML = data.output.city +", " + data.output.state;
        latitude.innerHTML = "Latitude: " + data.output.latitude;
        longitude.innerHTML = "Longitude: " + data.output.longitude



        if (request.status >= 200 && request.status < 400) {
            console.log(data);
        } else {
            console.log(searchInput1.value);
        }
    }

    request.send();
}

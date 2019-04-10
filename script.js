const datasetid = "FORECAST";
const datacategoryid = "GENERAL";
var today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0');
const yyyy = today.getFullYear();
today = yyyy + "-" + mm + "-" + dd;
const lang = "en";

let searchBtn = document.getElementById("submit-btn");
let search_Input = document.getElementById("city");
let cityName = document.getElementById("city-name2");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let morning = document.getElementById("morning-div");
let afternoon = document.getElementById("afternoon-div");
let night = document.getElementById("night-div");
// let latitude = document.getElementById("lat");
// let longitude = document.getElementById("long");

searchBtn.addEventListener("click", findWeatherDetails);
search_Input.addEventListener("keyup", enterPressed);

  var test = search_Input.value;
  //var res = str.slice(0, 12);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (search_Input.value === "") {
  
  }else {
    // let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
    // let searchLink = "https://api.met.gov.my/v2/data?datasetid=" + datasetid + "&datacategoryid=" + datacategoryid + "&locationid=" + searchInput.value + "&start_date=" + start_date + "&end_date=" + end_date;
       let searchLink = "https://api.oip.tm.com.my/app/t/malaysia.open.data/met/1.0.0/v2/data?datasetid=" + datasetid + "&datacategoryid=" + datacategoryid + "&locationid=" + search_Input.value.slice(0, 12) + "&start_date=" + today + "&end_date=" + today + "&lang=" + lang;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);

  temperature.innerHTML = jsonObject.results[3].value + "°C/" + jsonObject.results[4].value + "°C";
  morning.innerHTML = " " + jsonObject.results[0].value;
  afternoon.innerHTML = jsonObject.results[1].value;
  night.innerHTML = " " + jsonObject.results[2].value;
  // lat.innerHTML = " Latitude:" + " " + jsonObject.results[0].latitude;
  // long.innerHTML = "Longitude:" + " " + jsonObject.results[0].longitude;
}


function httpRequestAsync(url, callback)
{
  console.log("hello");

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }

        httpRequest.open("GET", "https://cors-anywhere.herokuapp.com/" + url, true); // true for asynchronous 
        //httpRequest.open("GET", url, true);

        httpRequest.setRequestHeader("BEToken", "METToken 4a4d69b92255ffe7bcedd8afa9f37b8eed1c48ee");
        httpRequest.setRequestHeader("Authorization", "Bearer 0937382d-b291-3fc3-8bb6-6d9b30784e81");
        httpRequest.setRequestHeader("Access-Control-Allow-Origin", "*");
        httpRequest.setRequestHeader("Content-Type", "application/json");
      
    httpRequest.send();
}

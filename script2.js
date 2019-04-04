var searchButton = document.getElementById("submit-btn");
var searchInput  = document.getElementById("state");
var searchInput2 = document.getElementById("city");
var firstAlert   = document.getElementById("first-alert");
var secondAlert  = document.getElementById("second-alert");
var thirdAlert   = document.getElementById("third-alert");
var forthAlert   = document.getElementById("forth-alert");
var fifthAlert   = document.getElementById("fifth-alert");
var sixthAlert   = document.getElementById("sixth-alert");
var seventhAlert = document.getElementById("seventh-alert");
var eighthAlert  = document.getElementById("eighth-alert");
searchButton.addEventListener("click", findPowerOutageAlert);
searchInput.addEventListener("keyup", enterPressed);


function enterPressed(event) {
  if (event.key === "Enter") {
      findPowerOutageAlert();
  }
}

function findPowerOutageAlert() {

    //set startDate and endDate to current date
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    //set the url request
    var api = "https://api.oip.tm.com.my/app/t/malaysia.open.data/tnb/1.0.0/power?stateID=";
    var sum = api + searchInput.value + "&areaID=" + searchInput2.value.slice(12) + "&startDate=" + today + "&endDate=" + today;
    //make XMLHttpRequest
    var xhr = new XMLHttpRequest();
    xhr.open('GET', sum);
    xhr.setRequestHeader("Authorization", "Bearer 01ac01f4-dbe2-3979-a319-abccfec8f51d");

    xhr.onload = function () {
        var data = JSON.parse(this.response);
        firstAlert.innerHTML  = "No Data";
        secondAlert.innerHTML = "";
        thirdAlert.innerHTML  = "";
        forthAlert.innerHTML  = "";
        fifthAlert.innerHTML  = "";
        sixthAlert.innerHTML  = "";
        seventhAlert.innerHTML= "";
        eighthAlert.innerHTML = "";

        if (data.MaintananceALert.length == 1) {
            firstAlert.innerHTML  = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration;
            secondAlert.innerHTML = "";
            thirdAlert.innerHTML  = "";
            forthAlert.innerHTML  = "";
            fifthAlert.innerHTML  = "";
            sixthAlert.innerHTML  = "";
            seventhAlert.innerHTML= "";
            eighthAlert.innerHTML = "";

        } else {
            firstAlert.innerHTML  = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration + "<br>" + "<br>";
            secondAlert.innerHTML = data.MaintananceALert[1][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[1][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[1][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[1][0].Duration + "<br>";
            thirdAlert.innerHTML  = data.MaintananceALert[2][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[2][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[2][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[2][0].Duration + "<br>";
            forthAlert.innerHTML  = data.MaintananceALert[3][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[3][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[3][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[3][0].Duration + "<br>";
            fifthAlert.innerHTML  = data.MaintananceALert[4][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[4][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[4][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[4][0].Duration + "<br>";
            sixthAlert.innerHTML  = data.MaintananceALert[5][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[5][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[5][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[5][0].Duration + "<br>";
            seventhAlert.innerHTML= data.MaintananceALert[6][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[6][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[6][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[6][0].Duration + "<br>";
            eighthAlert.innerHTML = data.MaintananceALert[7][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[7][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[7][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[7][0].Duration + "<br>";
        }
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log(data);
        } else {
            console.log(searchInput2.value);
        }
    }
    xhr.send();
}
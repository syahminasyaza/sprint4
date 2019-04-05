var searchButton = document.getElementById("submit-btn");
var searchInput  = document.getElementById("state");
var searchInput2 = document.getElementById("city");
var alert   = document.getElementById("alert");

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
        alert.innerHTML  = "No data";

        if (data.MaintananceALert.length == 1) {
            alert.innerHTML = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration;

        } else if (data.MaintananceALert.length == 2) {
            alert.innerHTML = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[1][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[1][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[1][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[1][0].Duration;

        } else if (data.MaintananceALert.length == 3) {
            alert.innerHTML = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[1][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[1][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[1][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[1][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[2][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[2][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[2][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[2][0].Duration;

        } else if (data.MaintananceALert.length == 4) {
            alert.innerHTML = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[1][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[1][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[1][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[1][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[2][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[2][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[2][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[2][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[3][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[3][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[3][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[3][0].Duration;

        } else if (data.MaintananceALert.length == 5) {
            alert.innerHTML = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[1][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[1][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[1][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[1][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[2][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[2][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[2][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[2][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[3][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[3][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[3][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[3][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[4][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[4][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[4][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[4][0].Duration;

        } else if (data.MaintananceALert.length == 6) {
            alert.innerHTML = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[1][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[1][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[1][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[1][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[2][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[2][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[2][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[2][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[3][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[3][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[3][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[3][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[4][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[4][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[4][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[4][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[5][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[5][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[5][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[5][0].Duration;

        } else if (data.MaintananceALert.length == 7) {
            alert.innerHTML = "Total Preventive Maintenance Scheduled: " + data.MaintananceALert.length + "<br>" + "<br>" + data.MaintananceALert[0][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[0][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[0][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[0][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[1][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[1][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[1][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[1][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[2][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[2][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[2][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[2][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[3][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[3][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[3][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[3][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[4][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[4][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[4][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[4][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[5][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[5][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[5][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[5][0].Duration + "<br>" + "<br>" +
                               data.MaintananceALert[6][0].Title + "<br>" + '<img src="images/icon-area.png"/>' + " : " + data.MaintananceALert[6][0].area + "<br>" + '<img src="images/icon-date.png"/>' + " : " + data.MaintananceALert[6][0].DateandTime + "<br>" + '<img src="images/icon-duration.png"/>' + " : " + data.MaintananceALert[6][0].Duration;
        }
        if (xhr.status >= 200 && xhr.status < 400) {
            console.log(data);
        } else {
            console.log(searchInput2.value);
        }
    }
    xhr.send();
}

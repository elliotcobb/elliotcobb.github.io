var map;
var lat = -99999;
var lng = -99999;

function initialize() {
    getMyLocation();
    var mapOptions = {
        center: { lat: 42.4, lng: -71.116},
        zoom: 8 
    };

    map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
}

google.maps.event.addDomListener(window, 'load', initialize);

// sets the center of the map to be at global varibale coordinates lat lng
function setCenter() {
    map.setCenter({lat: lat, lng: lng});
}

// takes in latitute, longitude, and a url of an icon image in single quotes
// example: 'myImage.png'
function newMarker(lat1, lng1, icon) {
    new google.maps.Marker({position: {lat: lat1, lng: lng1}, map: map, icon: icon});
}

// geolocation function
// called when body has finished loading
function getMyLocation() {

    elem = document.getElementById("loc");
    if (navigator.geolocation) {
        // the navigator.geolocation object is supported on your browser
        //console.log("Call before navigator.geolocation");
        navigator.geolocation.getCurrentPosition(function(position) {
                //console.log("Got location");
                lat = position.coords.latitude;
                lng = position.coords.longitude;

                setCenter();
                newMarker(lat, lng, 'broncos.png');
        });
        //console.log("Made the call to get location");
    }
    else {
        alert("Geolocation is not supported by your web browser.  What a shame!");
    }
}

/*
var xmlhttp = new XMLHttpRequest();
var url = "http://chickenofthesea.herokuapp.com/sendLocation";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var mapData = JSON.parse(xmlhttp.responseText);
        myFunction(mapData);
    }
}

xmlhttp.open("GET", url, true);
xmlhttp.send();

// called during xmlHTTPrequest
function myFunction(jsonData) {

    document.getElementById("divT").innerHTML = jsonData;
}*/


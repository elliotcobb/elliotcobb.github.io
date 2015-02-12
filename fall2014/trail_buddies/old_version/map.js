var map;
var myLat = 0;
var myLng = 0;
var request = new XMLHttpRequest();
var me = new google.maps.LatLng(myLat, myLng);
var marker;
var mapOptions = {
        center: me,
        zoom: 8
};

function initialize() {
        map = new google.maps.Map(document.getElementById('map_canvas'),
        mapOptions);
        MyLocation();
}
function MyLocation()
{
        if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                        myLat = position.coords.latitude;
                        myLng = position.coords.longitude;
                        renderMap();
                });
        }
        else {
                alert("Your Browser doesn't support geolocation");
        }
}

//set up map
function renderMap()
{
        me = new google.maps.LatLng(myLat, myLng);
        
        map.panTo(me);
  
        //CREATE MARKER
        marker = new google.maps.Marker({
                position: me,
                title: "You Are Here",
        });
        marker.setMap(map);

        google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(marker.title);
                infowindow.open(map, marker);
        });

        request.open("GET", "http://ancient-lake-4187.herokuapp.com/locations.json", true);

        request.onreadystatechange = callback;

        //request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        //request.send(parameters);

}


function callback()
{
        if (request.readyState == 4 && request.status == 200) {
                var data = JSON.parse(request.responseText);

                for(var j = 0; j < data.hikes.length; j++) {
                        createHikeMark(data.hikes[j]);
                }
        }
}

function createHikeMark(hike)
{
        var loc = new google.maps.LatLng(hike.lat, hike.lng);
        var marker = new google.maps.Marker({
                map: map,
                position: loc,
                title: hike.date_time
        });

        var content = marker.title + "</br>" + "With: " + hike.login + "</br>" +
                              hike.descript;

        google.maps.event.addListener(marker, 'click', function() {
                infowindow.close();
                infowindow.setContent(content);
                infowindow.open(map, this);
        });
}
google.maps.event.addDomListener(window, 'load', initialize);

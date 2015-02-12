// approximate boston lat lng
var lat = 42.1;
var lng = -71.11;

var map;

var userMarker;

function init()
{
        var initCenter = new google.maps.LatLng(42.3599611, -71.0567528);

        // Set up map
        var myOptions = {
                zoom: 13, // The larger the zoom number, the bigger the zoom
                center: initCenter,
                mapTypeId: google.maps.MapTypeId.ROADMAP
        };
                                
        // Create the map in the "map_canvas" <div>
        map = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
}

if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                addUserMarker();
                addInfoWindow();
                clearInterval(locationTimer);
        });

} else {
        alert("Geolocation is not supported by your web browser.  What a shame!");
}

function addUserMarker() {

        loc = new google.maps.LatLng(lat, lng);
        // Create a marker                              
        userMarker = new google.maps.Marker({
                position: loc,
                title: "Your Location",
                icon: 'broncos.png'
        });

        // add marker to map
        userMarker.setMap(map);
        map.panTo(loc);
}

function addInfoWindow() {
        // This is a global info window...
        var infowindow = new google.maps.InfoWindow();
                                
        // Open info window on click of userMarker
        google.maps.event.addListener(userMarker, 'click', function() {
                infowindow.setContent(userMarker.title);
                infowindow.open(map, userMarker);
        });
}



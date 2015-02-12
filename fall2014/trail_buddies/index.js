var map;
var myLat = 0;
var myLng = -100;
var me = new google.maps.LatLng(myLat, myLng);
var GLOBALmarker;
var GLOBALinfowindow;
var mapOptions = {
        center: me,
        zoom: 2
};
var marker_array = [];

function initialize() {
        map = map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);
        MyLocation();
        $.get("http://ancient-lake-4187.herokuapp.com/", function(data) {
            for(var j = 0; j < data.length; j++) {
               createHikeMark(data[j]);
            }
        }, "json");
        google.maps.event.addListener(map, 'rightclick', function(e) {
                placeMarker(e.latLng, map);
        });
        if (screen.width < 960) {
            google.maps.event.addListener(map, 'dblclick', function(e) {
                    map.set("disableDoubleClickZoom", true);
                    placeMarker(e.latLng, map);
            });
        }
}


//This is the new version of this function, which now it includes the button:
function createHikeMark(hike)
{
    var loc = new google.maps.LatLng(hike.lat, hike.lng);
    
    var participants = "";
    /* make a list of participants to display */
    for (var i = 0; i < hike.participants.length; i++) {
        if (i == hike.participants.length - 1) {
            participants += hike.participants[i];
        } else {
            participants += hike.participants[i] + ", ";
        }
    }
    /* get weather forecast for this location and also format info windows while you're at it */
    $.get("http://ancient-lake-4187.herokuapp.com/weather.json?lat=" + hike.lat + "&lng=" + hike.lng, function(weather_data) {
        var weatherData = weather_data; 

        /* parse the weather content */
        var weather_content = format_weather(weatherData, hike);

        /* create and format info window content */
        var theContent = "<html><head><style>h2{text-align:center; color:green;}#invisible{display:none;}</style></head><body>" +"<p id='invisible'>" + hike._id +"ENDOFID" +  "</p>" + "<h2>"  + hike.hike_name+" </h2>" + "<p><b>" + "Participants:</b> " + 
        participants + "<p><b>Date of Hike: </b>" + hike.start_date + "</p><p><b>Time: </b>" + hike.hour + ":" + hike.minute + " " + hike.am_pm + "</p><p><b>Description: </b>" 
        + hike.descript + weather_content + "</p></body></html>" + "<button data-toggle=\"modal\" data-target=\"#myModal2\">Join hike</button>";
    
         var marker = new google.maps.Marker({
           map: map,
           position: loc,
           title: hike.hike_name,
           holdThis: theContent
          });
    
        /* Set initial content to include button */
        JOINinfowindow = new google.maps.InfoWindow({
            content: theContent,
        });
    
        google.maps.event.addListener(marker, 'click', function(){
            JOINinfowindow.close();
            var theID = findSubstring(118, "ENDOFID", marker.holdThis);
    
            $('#IdofHike').val(theID);
                   
            JOINinfowindow.setContent(theContent);//Set content with button each time
            JOINinfowindow.open(map,this);
        });
        marker_array.push(marker);
    }, "json");
}
/* formats weather for the infowindow */
function format_weather(weatherData, hike)
{
    var currentdate = new Date();
        var hike_date = new Date(hike.start_date);
        if (hike_date <= (currentdate.setDate(currentdate.getDate() + 10))) {
            var offset = currentdate.getDay() - hike_date.getDay();
            weather_content = "<h5>The Weather Forcast for " + (hike_date.getMonth() + 1) + "/" + hike_date.getDate() + "/" +  hike_date.getFullYear() + ": </h5>";
            weather_content += "<p>Temperature High: " + weatherData.daily.data[offset].apparentTemperatureMax + " F</p><p>Temperature Low: " + weatherData.daily.data[offset].apparentTemperatureMin + " F</p><p>Description: " + weatherData.daily.data[offset].summary + "</p>";
            return weather_content;
        } else {
            weather_content = "<h5>Weather Right Now: </h5>";
            weather_content += "<p>Temperature: " + weatherData.currently.apparentTemperature + " F</p><p>Description: " + weatherData.currently.summary + "</p>";
            return weather_content;
        }
}

/* Takes in: startIndex: the index position of the string that is the first character of the desired substring,
          firstUnwantedChar: the string value that includes the first unwanted character after the end of
                             the DESIRED substring.
e.g.: fullString = "Hello World", start index = 0, firstUnwantedSubstring = "orld", 
  then the return value will be: "Hello W". */
function findSubstring(startIndex, firstUnwantedSubstring, fullString) {
    var StartingIndexOfUnwantedString = fullString.indexOf(firstUnwantedSubstring);
    var desiredString = fullString.substring(startIndex, StartingIndexOfUnwantedString);
    return desiredString;
}

//Helper function for the 'click' event in createHikeMark function. 
//(For when someone clicks the "Join hike" button)
//Will set the values of the fields that appear on the form that pops up on the screen
//so that they are already populated with the information. 
function setJoinHikeFormData(hike) {
    $('#latOfHike').val(hike.lat);  
    $('#lngOfHike').val(hike.lng);
}



function placeMarker(position, map) {

        clearUserMarker();

        GLOBALmarker = new google.maps.Marker({
                position: position,
                map: map
        });

        /* set lat and lng values in add hike input field */
        $('#hikeLat').val(GLOBALmarker.getPosition().lat());
        $('#hikeLng').val(GLOBALmarker.getPosition().lng());

        addInfoWindow(GLOBALmarker);

        map.panTo(position);

}

function clearUserMarker () {

        if (GLOBALmarker != undefined) {

                // delete all other markers added in this session
                GLOBALmarker.setMap(null);
                GLOBALmarker = null;
        }
}

function addInfoWindow(marker) {

        GLOBALinfowindow = new google.maps.InfoWindow({
        //                content: "<button data-toggle=\"modal\" data-target=\"#myModal\">Add hike</button>",
                content: "<button data-toggle=\"modal\" data-target=\"#myModal\">Add hike</button>"
        });

        GLOBALinfowindow.open(map,marker);

        google.maps.event.addListener(marker, 'click', function() {
                GLOBALinfowindow.open(map,marker);
        });

        google.maps.event.addListener(GLOBALinfowindow, 'closeclick', function() {
                GLOBALinfowindow.close();
                clearUserMarker();
        });
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
        map.setZoom(6);

        var image = 'small_blue_ball.png';
        var marker = new google.maps.Marker({
              position: me,
              map: map,
              icon: image
        });

}
google.maps.event.addDomListener(window, 'load', initialize);


$(function () {
        $('[data-toggle="popover"]').popover();
});

// add open datepicker in add hike modal
$(function() {
        $( "#datepicker" ).datepicker({ minDate: 0});
});

$(function() {
        $("#datepickerfiltermin").datepicker({ minDate: 0});
});

$(function() {
        $("#datepickerfiltermax").datepicker({ minDate: 0});
});


// called when add hike "save changes" button is clicked
function submit_addhike() {
    var formData = $('#addhikeform').serialize();
    if ($("#add_hike_name").val() == '' || $("#add_hike_email").val() == '') {
        alert("ALL FIELDS ARE REQUIRED");
    } else {
        $.post( "http://ancient-lake-4187.herokuapp.com/sendLocation", formData, function( data ) {
                /* immediatedly get all the data after the hike is added so marker appears */
                $.get("http://ancient-lake-4187.herokuapp.com/", function(returned) {
                    for(var i = 0; i < returned.length; i++) {
                        createHikeMark(returned[i]);
                    }
                }, "json");
        }, "json");
    }
    clearUserMarker();
}


//called when "add hike" button is clicked from Join Hike
function submit_joinhike() {
    if ($("#join_hike_name").val() == '' || $("#join_hike_email").val() == '') {
        alert("ALL FIELDS ARE REQUIRED");
    } else {
        var formData = $('#joinhikeform').serialize();
        $.post( "http://ancient-lake-4187.herokuapp.com/joinHikeTaylor", formData, function( data ) {
                    /* immediatedly get all the data after the hike is added so marker appears */
                    $.get("http://ancient-lake-4187.herokuapp.com/", function(returned) {
                        for(var i = 0; i < returned.length; i++) {
                            createHikeMark(returned[i]);
                        }
                    }, "json");
        }, "json");
    }
    clearUserMarker();
}
$("#clearfilterdatebutton").click( function() {
    for (var i = 0; i < marker_array.length; i++) {
        if (marker_array[i].getMap() == null) {
            marker_array[i].setMap(map);
        } else {
            marker_array.splice(i, 1);
        }
    }   
});

$("#filterdatebutton").click( function() {
        var minDate = new Date($("#datepickerfiltermin").val());
        var maxDate = new Date($("#datepickerfiltermax").val());

        if ((maxDate == "Invalid Date") || (minDate == "Invalid Date")) {

                $("#datelabel").css("display", "block");
                $("#filterdateform").addClass("has-error");
                return; 
        } 

        if (maxDate < minDate) {
                $("#datelabel2").css("display", "block");
                $("#filterdateform").addClass("has-error");
                return;   
        } 
        var filterdatedata = $('#filterdateform').serialize();
        $.get("http://ancient-lake-4187.herokuapp.com/filterDate?" + filterdatedata, function(data) {
                setAllMap(null);
                for(var j = 0; j < data.length; j++) {
                        createHikeMark(data[j]);
                }
        }, "json");                              
});

function setAllMap(map) {
  for (var i = 0; i < marker_array.length; i++) {
    marker_array[i].setMap(map);
  }
}

$(document).ready( function() {
        if (screen.width < 960) {
                $('[data-toggle="popover"]').attr("data-content", "Double click on the map to add a hike.");
        }
});

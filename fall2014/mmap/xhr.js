var xhr;
var params = "login=Mulan&lat=45&lng=-71";
function init() {
        xhr = new XMLHttpRequest();
        xhr.open("post", "http://chickenofthesea.herokuapp.com/sendLocation", true); // this is possible because of cross-origin resource sharing (CORS) enabled for web application
        // onreadystatechange has to be set to a...
        // ...function when request is completed, to...
        // ...handle the response
        xhr.onreadystatechange = dataReady;

        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
       // xhr.setRequestHeader("Content-length", params.length);
        //xhr.setRequestHeader("Connection", "close");

        xhr.send(params); // Go! Execute!
}
        function dataReady() {
        // The readyState numbers:
        // 0 = not initialized
        // 1 = Set up
        // 2 = Sent
        // 3 = In progress
        // 4 = Complete
        if (xhr.readyState == 4 && xhr.status == 200) {


                data = JSON.parse(xhr.responseText); 
                // GETTING JSON "STATUS: ERROR: DATA DID NOT GO THROUGH" HERE


                myDiv = document.getElementById("d1");
                console.log(data);
        }
        else if (xhr.readyState == 4 && xhr.status == 500) {
                scheduleDom = document.getElementById("d1");
                scheduleDom.innerHTML = '<p><img src="http://www.yiyinglu.com/failwhale/images/Homer_the_New_Fail_Whale_by_edwheeler.jpg" alt="fail" /></p>';
        }
}


$( document ).ready(function() {
    console.log("ready!");
});

var request = new XMLHttpRequest();
function submit_click() {

        var isFormValid = true;
        var errorMessageEmpty = "One or more fields are empty";
        var errorMessageDate = "Please specify a date in the following format: DD/MM/YYYY";
        var errorMessage1 = "One or more fields are empty";

        $(".txtBox").each(function(){
                if ($.trim($(this).val()).length == 0){
                        $(this).addClass("highlight");
                        isFormValid = false;
	if (errorMessage1 == errorMessageDate) {
	       console.log("its error message date" );
	       var nline = "\n";
	       errorMessage1 = errorMessageEmpty + ". ";
	       errorMessage1 += errorMessageDate;
	}

                }
                else{
                        if (this.attributes["name"].value == "dateTimeBox"){
                                var inputDate = $(this).val();
                                //DD/MM/YYYY is required here  
                                var dateParts = inputDate.split("/");
                                var date = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
                                if (date.getDate() == dateParts[0] && date.getMonth() == (dateParts[1] - 1) && date.getFullYear() == dateParts[2]) {
                                        console.log("date format is correct, as: DD/MM/YYYY");
                                        $(this).removeClass("highlight");
                                        errorMessage1 = errorMessageEmpty;
                                } 
                                else {
                                        errorMessage1 = errorMessageDate;
                                        isFormValid = false;
                                        $(this).addClass("highlight");
                                        console.log("incorrect date format" );
                                }
                        } 
                        else {
                                $(this).removeClass("highlight");
	}
                }
        });
	                                                                                                                     
        if (isFormValid == true) {
                request.open("POST", "http://ancient-lake-4187.herokuapp.com/sendLocation", true);
                // HOW DO WE GET LAT AND LNG FROM HERE, JUST BASED ON THE ADDRESS?????
                parameters = "login=" + $("#login").val() + "&email=" $("#email").val() + "&address=" +
                        $("#address").val() + "&date_time=" + $("#date_time").val() + "&hike_length=" +
                        $("#hike_length").val() + "&descript=" + $("#description").val();
                request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
                request.send(parameters);

                $("#popup_message").css("color", "purple");
                $("#popup_message").text("You Have Succesfully Added 1 Hike!");//This needs to say "... Joined 1 Hike!" instead for the joinHike
                setTimeout( "window.location.assign('index.html');",2000 );
        } else {
                $("#popup_message").css("color", "red");
                //$("#popup_message").text("One or more fields are empty");
                $("#popup_message").text(errorMessage1);
        }
}
$( document ).ready(function() {
	console.log("ready!");
});

function submit_click() {
    var isFormValid = true;
    var errorMessage1 = "One or more fields are empty";
    $(".txtBox").each(function(){
	    if ($.trim($(this).val()).length == 0){
		$(this).addClass("highlight");
		isFormValid = false;
	    }
	    else{
		$(this).removeClass("highlight");
	    }
        });
    /*
    var inputDate = document.getElementsByTagName('dateTimeBox');
    Date.format='mm/dd/yy';
    //Date.fromString() returns false when it cant make a valid date from input string                                   
    if(!(Date.fromString(inputDate.value))){
        isFormValid = false;
	$(this).addClass("highlight");
	errorMessage1 = "Please enter your date in the following format: MM/DD/YY"; 
    } else {
	errorMessage1 = "One or more fields are empty";
	$(this).addClass("highlight");
    }
    */
    if (isFormValid == true) {
	$("#popup_message").css("color", "purple");
	$("#popup_message").text("You Have Succesfully Added 1 Hike!");//This needs to say "... Joined 1 Hike!" instead for the joinHike                           
	setTimeout( "window.location.assign('index.html');",2000 );
    } else {
	$("#popup_message").css("color", "red");
	//	$("#popup_message").text("One or more fields are empty");
        $("#popup_message").text(errorMessage1);
    }
}


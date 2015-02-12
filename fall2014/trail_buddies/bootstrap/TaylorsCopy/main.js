$( document ).ready(function() {
    console.log("ready!");
});

function submit_click() {
	var isFormValid = true;

	$(".txtBox").each(function(){
    if ($.trim($(this).val()).length == 0){
        $(this).addClass("highlight");
        isFormValid = false;
    }
    else{
        $(this).removeClass("highlight");
    }
	});
	if (isFormValid == true) {
		$("#popup_message").css("color", "purple");
		$("#popup_message").text("You Have Succesfully Added 1 Hike!");//This needs to say "... Joined 1 Hike!" instead for the joinHike
		setTimeout( "window.location.assign('index.html');",2000 );
	} else {
		$("#popup_message").css("color", "red");
		$("#popup_message").text("One or more fields are empty");
	}
}
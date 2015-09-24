/**
 * Created by elliotcobb on 8/21/15.
 */

$('.the-team-content .thumbnail')
    .mouseenter( function() {
        //$(this).find('.curtain').show();
        $(this).find('.headshot').addClass('shaded-headshot');
        $(this).find('.nametag').show();
        $(this).find('.headshot2').show();
    })
    .mouseleave( function () {
        $(this).find('.headshot').removeClass('shaded-headshot');
        $(this).find('.nametag').hide();
        $(this).find('.headshot2').hide();
    })
;

$('.the-team-content .thumbnail').click(function() {
    console.log("click");
    var bio = $(this).find('.headshot-bio');
    if (bio.css('display') == 'none') {
        // show
        bio.show();
    } else {
        // hide
        bio.hide();
    }
});

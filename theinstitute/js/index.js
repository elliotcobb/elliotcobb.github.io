/**
 * Created by elliotcobb on 8/21/15.
 */

$('.the-team-content-holder .thumbnail')
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

$('.the-team-content-holder .thumbnail').click(function() {
    var bio = $(this).find('.headshot-bio');
    if (bio.css('display') == 'none') {
        // show
        bio.show();
    } else {
        // hide
        bio.hide();
    }
});

function shuffleThumbs() {
    var thumbArray = new Array();
    thumbArray = assignThumbsRandomVals(thumbArray);
    thumbArray = thumbArray.sort();
    removeAppendSortedThumbs(thumbArray);
}

function assignThumbsRandomVals(thumbArray) {
    $('.thumbColumn[data-randID]').each( function() {
        var randomID = Math.floor((Math.random() * 10000) + 1);
        thumbArray.push(randomID);
        $(this).attr('data-randID', randomID);
    });
    return thumbArray;
}

function removeAppendSortedThumbs(thumbArray) {
    for (var i = 0; i < thumbArray.length; i++) {
        $('.thumbColumn[data-randID=' + thumbArray[i] + ']').appendTo('.the-team-content');
    }
};

$(document).ready( function() {
    shuffleThumbs();
});

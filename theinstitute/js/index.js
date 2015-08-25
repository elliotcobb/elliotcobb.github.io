/**
 * Created by elliotcobb on 8/21/15.
 */

$('.pill-nav').click( function() {
    var $thisPillNav = $(this).closest('li');
    if ($thisPillNav.hasClass('active')) {
        // this pill already selected
    } else {
        var activeContentName = $('ul.nav-pills li.active a[data-content-class]').attr('data-content-class');
        $('.' + activeContentName).hide();
        $('ul.nav-pills li.active').removeClass('active');

        $thisPillNav.addClass('active');
        var newActiveContentName = $thisPillNav.find('a[data-content-class]').attr('data-content-class');
        $('.' + newActiveContentName).show();
    }
});

$('.the-team-content .thumbnail')
    .mouseenter( function() {
        //$(this).find('.curtain').show();
        $(this).find('.headshot').addClass('shaded-headshot');
        $(this).find('.nametag').show();
    })
    .mouseleave( function () {
        $(this).find('.headshot').removeClass('shaded-headshot');
        $(this).find('.nametag').hide();
    })
;

$(document).ready( function() {
    $('.the-team').click();
});

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

$(document).ready( function() {
    $('.the-team').click();
});

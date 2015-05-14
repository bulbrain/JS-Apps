/**
 * Created by Georgi on 6.4.2015 ã..
 */
$( document ).ready(function() {
    slideSwitch();
    refreshIntervalId();
});

var refreshIntervalId = setInterval("slideSwitch()", 5000);

function slideSwitch() {
    var $active = $('#slideShow IMG.active');
    if ( $active.length == 0 ) {
        $active = $('#slideShow IMG:last');
    }
    var $next =  $active.next().length ? $active.next()
        : $('#slideShow IMG:first');
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

function change(args) {
    clearInterval(refreshIntervalId);
    var $active = $('#slideShow IMG.active');
    if(args == 'next') {
        if ( $active.length == 0 ) {
            $active = $('#slideShow IMG:last');
        }
        var $next =  $active.next().length ? $active.next()
            : $('#slideShow IMG:first');
    } else {
        if ( $active.length == 0 ) {
            $active = $('#slideShow IMG:first');
        }
        var $next =  $active.prev().length ? $active.prev()
            : $('#slideShow IMG:last');
    }
    $active.addClass('last-active');
    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}
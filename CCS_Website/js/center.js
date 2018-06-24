/* Title + Logo Centered */

$(document).ready(function(){

    $('#evt_header').css('right',''+($(window).width() - $('#evt_header').width())/2+'px');
    $('#abt_header').css('right',''+($(window).width() - $('#abt_header').width())/2+'px');
    $('#logo').css('right',''+($(window).width() - $('#logo').width())/2+'px');
    $('.intro').css('right',''+($(window).width() - $('.intro').width())/2+'px');
    $('.Mainframe').css('right',''+($(window).width() - $('.Mainframe').width())/2+'px');
    $('.FlipText').css({'right':''+($('.FlipBack').width() - $('.FlipText').width())/2+'px'});
    $('#ab_quote').css({'top':''+($('.about_con2').height() - $('#ab_quote').height())/2+'px','right':''+($(window).width() - $('#ab_quote').width())/2+'px'});

});

$(window).resize(function(){

    $('#evt_header').css('right',''+($(window).width() - $('#evt_header').width())/2+'px');
    $('#abt_header').css('right',''+($(window).width() - $('#abt_header').width())/2+'px');
    $('#logo').css('right',''+($(window).width() - $('#logo').width())/2+'px');
    $('.intro').css('right',''+($(window).width() - $('.intro').width())/2+'px');
    $('.Mainframe').css('right',''+($(window).width() - $('.Mainframe').width())/2+'px');
    $('.FlipText').css('right',''+($('.FlipBack').width() - $('.FlipText').width())/2+'px');
    $('#ab_quote').css({'top':''+($(window).height() - $('#ab_quote').height())/2+'px','right':''+($(window).width() - $('#ab_quote').width())/2+'px'});
});

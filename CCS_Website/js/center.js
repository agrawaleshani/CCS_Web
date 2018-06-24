/* Title + Logo Centered */

$(document).ready(function(){

    $('#evt_header').css('right',''+($(window).width() - $('#evt_header').width())/2+'px');
    $('#abt_header').css('right',''+($(window).width() - $('#abt_header').width())/2+'px');
    $('#logo').css('right',''+($(window).width() - $('#logo').width())/2+'px');
    $('.intro').css('right',''+($(window).width() - $('.intro').width())/2+'px');

});

$(window).resize(function(){

    $('#evt_header').css('right',''+($(window).width() - $('#evt_header').width())/2+'px');
    $('#abt_header').css('right',''+($(window).width() - $('#abt_header').width())/2+'px');
    $('#logo').css('right',''+($(window).width() - $('#logo').width())/2+'px');
    $('.intro').css('right',''+($(window).width() - $('.intro').width())/2+'px');
});

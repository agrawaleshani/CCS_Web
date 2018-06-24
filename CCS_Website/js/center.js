/* Title + Logo Centered */

$(document).ready(function(){

    $('.title').each(function() {

    $(this).css('right',''+($(window).width() - $(this).width())/2+'px');
        
    });

    $('.c2').each(function() {

        $(this).css('right',''+($('.page').width() - $(this).width())/2+'px');
            
    });

    $('.fb').css({'top':''+($('.about_con2').height() - $('.fb').height())/2+'px','right':''+($('.about_con2').width() - $('.fb').width())/2+'px'});
 
    $('.head').css('right',''+($('.about_con1').width() - $('.head').width())/2+'px');
    $('#logo').css('right',''+($(window).width() - $('#logo').width())/2+'px');
    $('.intro').css('right',''+($(window).width() - $('.intro').width())/2+'px');
    $('.Mainframe').css('right',''+($(window).width() - $('.Mainframe').width())/2+'px');
    $('.FlipText').css({'right':''+($('.FlipBack').width() - $('.FlipText').width())/2+'px'});
    $('#ab_quote').css({'top':''+($('.about_con2').height() - $('#ab_quote').height())/2+'px','right':''+($(window).width() - $('#ab_quote').width())/2+'px'});

});

$(window).resize(function(){

    $('.title').each(function() {

        $(this).css('right',''+($(window).width() - $(this).width())/2+'px');
            
    });

    $('.c2').each(function() {

        $(this).css('right',''+($('.page').width() - $(this).width())/2+'px');
            
    });
    $('.fb').css({'top':''+($('.about_con2').height() - $('.fb').height())/2+'px','right':''+($('.about_con2').width() - $('.fb').width())/2+'px'});   
    $('.head').css('right',''+($(window).width() - $('.head').width())/2+'px');
    $('#logo').css('right',''+($(window).width() - $('#logo').width())/2+'px');
    $('.intro').css('right',''+($(window).width() - $('.intro').width())/2+'px');
    $('.Mainframe').css('right',''+($(window).width() - $('.Mainframe').width())/2+'px');
    $('.FlipText').css('right',''+($('.FlipBack').width() - $('.FlipText').width())/2+'px');
    $('#ab_quote').css({'top':''+($(window).height() - $('#ab_quote').height())/2+'px','right':''+($(window).width() - $('#ab_quote').width())/2+'px'});
});

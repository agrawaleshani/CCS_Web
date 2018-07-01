/* Holder , Cover Centered */

$(document).ready(function(){

    $('.view').each(function() {
        $(this).css('right',''+($('.m_fig').width() - $(this).width())/2+'px');     
    });

    $('.txt_sec').each(function() {
        $(this).css('right',''+($('.m_fig').width() - $(this).width())/2+'px');     
    });

    $('.holder').each(function() {
        $(this).css('right',''+($('.view').width() - $(this).width())/2+'px');     
    });
    
});

$(window).resize(function(){

    $('.view').each(function() {
        $(this).css('right',''+($('.m_fig').width() - $(this).width())/2+'px');     
    });

    $('.txt_sec').each(function() {
        $(this).css('right',''+($('.m_fig').width() - $(this).width())/2+'px');     
    });

    $('.holder').each(function() {
        $(this).css('right',''+($('.view').width() - $(this).width())/2+'px');     
    });

});

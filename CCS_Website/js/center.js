/* Title + Logo Centered */
var v=0;

jQuery.fn.center = function () {
    this.css("position","absolute");

    this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) + 
                                                $(window).scrollLeft()) + "px");
    return this;
}
$(document).ready(function(){

    $('.c2').each(function() {

        $(this).center();
            
    });

    $('.title').each(function() {

        $(this).center();

    });

    $('.fb').css({'top':''+($('.about_con2').height() - $('.fb').height())/2+'px','right':''+($('.about_con2').width() - $('.fb').width())/2+'px'});

    $('.head').center();
    $('#logo').center();
    $('.intro').center();
    $('.Mainframe').center();
    $('.FlipText').center();
    $('#ab_quote').css({'top':''+($('.about_con2').height() - $('#ab_quote').height())/2+'px','right':''+($(window).width() - $('#ab_quote').width())/2+'px'});

})

$(document).scroll(function(){
    if(v==0){
        $('.c2').each(function() {

            $(this).center();
                
        });

        $('.title').each(function() {

            $(this).center();

        });

        $('.fb').css({'top':''+($('.about_con2').height() - $('.fb').height())/2+'px','right':''+($('.about_con2').width() - $('.fb').width())/2+'px'});
    
        $('.head').center();
        $('#logo').center();
        $('.intro').center();
        $('.Mainframe').center();
        $('.FlipText').center();
        $('#ab_quote').css({'top':''+($('.about_con2').height() - $('#ab_quote').height())/2+'px','right':''+($(window).width() - $('#ab_quote').width())/2+'px'});
    }
    v++
});

$(window).resize(function(){

    $('.c2').each(function() {

        $(this).center();
            
    });

    $('.title').each(function() {

        $(this).center();

    });

    $('.fb').css({'top':''+($('.about_con2').height() - $('.fb').height())/2+'px','right':''+($('.about_con2').width() - $('.fb').width())/2+'px'});

    $('.head').center();
    $('#logo').center();
    $('.intro').center();
    $('.Mainframe').center();
    $('.FlipText').center();
    $('#ab_quote').css({'top':''+($('.about_con2').height() - $('#ab_quote').height())/2+'px','right':''+($(window).width() - $('#ab_quote').width())/2+'px'});
});
$(document).scroll(function() {

    var scroll=$(this).scrollTop();
    var h=document.body.clientHeight;
    h-=$('#msg').height()/2;

    /* Msg Icon */

    if(scroll>h)
    {
        $('#msg_icon').css('background-image',' url(img/icons/email-16-black.png)');
        $('#msg').css('background-color','transparent');

        $('#msg').mouseleave(function(){
            $('#msg').css('background-color','transparent');
            $('#msg_icon').css('background-image',' url(img/icons/email-16-black.png)');
        });
        $('#msg').mouseenter(function(){
            $('#msg').css('background-color','black');
            $('#msg_icon').css('background-image',' url(img/icons/email-16-white.png)');
        });

        $('#msg').mouseleave(function(){
            $('#msg_icon').css('background-image',' url(img/icons/email-16-black.png)');
        });


    }
    if(scroll<h)
    {
        $('#msg_icon').css('background-image',' url(img/icons/email-16-white.png)');
        $('#msg').css('background-color','transparent');

        $('#msg').mouseleave(function(){
            $('#msg').css('background-color','transparent');
            $('#msg_icon').css('background-image',' url(img/icons/email-16-white.png)');
        });
        $('#msg').mouseenter(function(){
            $('#msg').css('background-color','white');
            $('#msg_icon').css('background-image',' url(img/icons/email-16-black.png)');
        });
    }

    /* Content Block - Page 2 of every Section Parallax */

    $('.content').each(function() {

        var ho=$(this).offset().top;
    
        input= ((scroll-ho+(h/1.3))/(0.55*h));
        if(input<0)
        input=0;
    
    
        $(this).css('opacity',input);
    
        });
 
});
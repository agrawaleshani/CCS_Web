$(document).scroll(function() {

    var scroll=$(this).scrollTop();
    var h=document.body.clientHeight;
    h-=$('#msg').height()/2;

    /* Msg Icon + CCS_Logo Icon*/
    
    if(scroll>h)
    {
/*
        $('#logo_icon').css('background-image',' url(img/icons/logo_icon_b.png)');

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

*/
    }
    if(scroll<h)
    {
/*
        $('#logo_icon').css('background-image',' url(img/icons/logo_icon_w.png)');

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
*/
    }

    /* Content Block + About Title - Page 2 of every Section Parallax */

    $('.content').each(function() {
        
        var ho=$(this).offset().top;
        input= ((scroll-ho+(h/1.4))/(0.6*h));

        if(input<0)
        input=0;

        if(input>2){
            input=3-input;
        }

        console.log(input);
        
    
        $(this).css('opacity',input);


    });

});

$(document).ready(function() {

    /* Defatult Msg Icon Settings when No Scroll has occured */
    
    $('#msg').mouseleave(function(){
        $('#msg').css('background-color','transparent');
        $('#msg_icon').css('background-image',' url(img/icons/email-16-white.png)');
    });
    $('#msg').mouseenter(function(){
        $('#msg').css('background-color','white');
        $('#msg_icon').css('background-image',' url(img/icons/email-16-black.png)');
    });

});

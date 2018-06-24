$(document).scroll(function(){

    var scroll=$(this).scrollTop();
    var h=document.body.clientHeight;
    var habt=$('#abt_header').offset().top;
    var head_input= ((scroll-habt+(h/1.3))/(0.55*h));

    head_input-=0.4;
    
    $('.title').css('opacity',head_input);
 
});


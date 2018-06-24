$(document).scroll(function(){

    var scrollv=$(this).scrollTop();
    var h=document.body.clientHeight;

    $('.title').each(function() {

        var ho=$(this).offset().top;

        input= ((scrollv-ho+(h/1.3))/(0.55*h));
        
        input-=0.4;
        
        $(this).css('opacity',input);
      
        });

 
});


$(document).scroll(function() {

    scrollv=$(this).scrollTop();
    var h=$(window).height()/1.8;
    var condition=$('#tp2').offset().top-h;
  
    if(scrollv>condition)
    {
      $('figure').each(function(i) {
  
        setTimeout(function(){
          $('figure').eq(i).addClass('showing');
          },150*(i+1));
      });
    }
  
    if(scrollv<condition)
    {
      $('figure').removeClass('showing');
    }
  
  });
  
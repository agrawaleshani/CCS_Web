$(document).scroll(function() {

    scrollv=$(this).scrollTop();
    var h=$(window).height()/1.8;
    var condition=$('#tp2').offset().top-h;
  
    if(scrollv>condition)
    {
      $('.sfig').each(function(i) {
  
        setTimeout(function(){
          $('.sfig').eq(i).addClass('showing');
          },150*(i+1));
      });
    }
  
    if(scrollv<condition)
    {
      $('.sfig').removeClass('showing');
    }

    var condition2=$('#tp3').offset().top-h;
  
    if(scrollv>condition2)
    {
      $('.fig_core').each(function(i) {
  
        setTimeout(function(){
          $('.fig_core').eq(i).addClass('showing');
          },150*(i+1));
      });
    }
  
    if(scrollv<condition2)
    {
      $('.fig_core').removeClass('showing');
    }
  
  });
  
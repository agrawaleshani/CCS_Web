$(document).scroll(function() {

    scrollv=$(this).scrollTop();
    var h=$(window).height()/1.8;
    var condition=$('#tp2').offset().top-h;

    if(scrollv>condition)
    {
      $('.m_fig').each(function(i) {

        setTimeout(function(){
          $('.m_fig').eq(i).addClass('showing');
          },150*(i+1));
      });
    }

    if(scrollv<condition)
    {
      $('.m_fig').removeClass('showing');
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

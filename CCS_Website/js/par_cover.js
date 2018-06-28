$(document).scroll(function() {

  // Slide Arrow fade In And Out
  var scroller=$(window).scrollTop();
  
  if(scroller>100)
  {
  $('.slide').fadeOut(10);
  }
  if(scroller<100)
  {
  $('.slide').fadeIn(10);
  }
  
  /* Scroll Quotes */

  scrollv=$(this).scrollTop()
  if(token_1==1)
  {
      setTimeout(function(){

      $('#qe1').css({
          '-webkit-transform' : 'translate(0px,'+ -0.2*scrollv +'%)',
          });
      
      $('#qe2').css({
          '-webkit-transform' : 'translate(0px,'+ -0.2*scrollv +'%)',
          });

      },200);
  }

  if(token_2==1)
  {
      setTimeout(function(){

      },200);
      
      $('#qt1').css({
        '-webkit-transform' : 'translate(0px,'+ -0.3*scrollv +'%)',
        });
    
    $('#qt2').css({
        '-webkit-transform' : 'translateX('+ 0.3*scrollv +'%)',
        });
  }

  /* Opacity Change of Logo and Secodary Element of 1st page of 3 sections */

  var scroll=$(this).scrollTop();
  var h=document.body.clientHeight;
  var val=1-scroll/(0.53*h);
  var val_icon=1-scroll/(0.2*h);
  var val_block=0.5-scroll/(0.2*h);

  $('#logo').css('opacity',val);
  $('.float_zone').css('opacity',val_icon);
  $('#ab_block').css('opacity',val_block);
  $('#tm_block').css('opacity',val_block);

  var no=((scroll)/h);
  no+=0.2;
  var page=Math.ceil(no);
  document.getElementById("txt").innerHTML =page+' / 3';

// Fade Out When Opacity is 0- Note to better code through iteration

  var check=$('.float_zone').css('opacity')
    if(check<=0)
    {
      $('.float_zone').fadeOut(0);
    }
    else
    {
      $('.float_zone').fadeIn(0);
    }
  check=$('#logo').css('opacity')
    if(check<=0)
    {
      $('#logo').fadeOut(0);
    }
    else
    {
      $('#logo').fadeIn(0);
    }
  check=$('#ab_block').css('opacity')
    if(check<=0)
    {
      $('#ab_block').fadeOut(0);
    }
    else
    {
      $('#ab_block').fadeIn(0);
    }
  check=$('#tm_block').css('opacity')
    if(check<=0)
    {
      $('#tm_block').fadeOut(0);
    }
    else
    {
      $('#tm_block').fadeIn(0);
    }

// Page Number Disappear'


});

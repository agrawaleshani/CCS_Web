$(document).ready(function() {

  /* Active Button */

    $('#b_1').addClass('nav_active');

    $('#b_1').click(function(){

      /* Page No Background */
      setTimeout(function(){ $('#page_no').css('background-color','#000'); }, 1000);

      /* Active Button */
      $('.btn').removeClass('nav_active');
      $(this).addClass('nav_active');

      /* Scroll Bar Handler */

      $('html').css('overflow','hidden');
      setTimeout(function(){ $('html').css('overflow-y','visible'); }, 1000);

      /* Position Section */

      $('.about').css('left','0');
      $('.events').css('left','100%');
      $('.team').css('left','200%');

    });

    $('#b_2').click(function(){

       /* Page No Background */
       setTimeout(function(){ $('#page_no').css('background-color','#2a3749'); }, 1000);

      /* Active Button */
      $('.btn').removeClass('nav_active');
      $(this).addClass('nav_active');

      /* Scroll Bar Handler */

      $('html').css('overflow','hidden');
      setTimeout(function(){ $('html').css('overflow-y','visible'); }, 1000);

      /* Position Section */

      $('.about').css('left','-100%');
      $('.events').css('left','0');
      $('.team').css('left','100%');

    });

    $('#b_3').click(function(){

      /* Page No Background */
      
      setTimeout(function(){ $('#page_no').css('background-color','#485f80'); }, 1000);

      /* Active Button */
      $('.btn').removeClass('nav_active');
      $(this).addClass('nav_active');

      /* Scroll Bar Handler */

      $('html').css('overflow','hidden');

      setTimeout(function(){ $('html').css('overflow-y','visible'); }, 1000);

      /* Position Section */

      $('.about').css('left','-200%');
      $('.events').css('left','-100%');
      $('.team').css('left','0');

    });

    $('.slide').click(function(e){
      e.preventDefault();
      y=document.body.clientHeight;
      $('html,body').stop(true, false).animate({scrollTop:y},800);
    });

});

$(document).mousemove(function(e) {
  var msg = "Handler for .mousemove() called at ";
  x = -e.pageX/100;
  y = -e.pageY/100;
  $('#logo').css('transform','translate('+ x +'px,'+ y +'px)');
});


$(document).scroll(function() {

  var scroll=$(this).scrollTop();
  var h=document.body.clientHeight;
  var val=1-scroll/(0.5*h);
  var val_icon=1-scroll/(0.2*h);
  var val_block=0.5-scroll/(0.2*h);

  $('#logo').css('opacity',val);
  $('.float_zone').css('opacity',val_icon);
  $('#ab_block').css('opacity',val_block);
  $('#tm_block').css('opacity',val_block);

  var no=((scroll)/h);
  no+=0.1;
  var page=Math.ceil(no);
  document.getElementById("txt").innerHTML =page+' / 2';

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



});

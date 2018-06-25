var token_1=0;
var token_2=0;

$(document).ready(function() {

  var i=0;
  var j=0;

  /* Active Button */

    $('#b_1').addClass('nav_active');

    $('#b_1').click(function(){

      /* Quotes */

      $('.q').removeClass('move_down');

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
      
      token_1=1;
      token_2=0;

      /* Quotes */

      $('.q').removeClass('move_down');

      setTimeout(function(){ 
        
        $('.qe').addClass('move_down');
          
      }, 1000);

      /* Typewriter */

      var txt = '< Projects and Events >';
    
      function typeWriter() {
        
        if (i < txt.length) {
          document.getElementById('ev_b_span').innerHTML += txt.charAt(i);
          i++;
          setTimeout(typeWriter, 100);
        }
      }
      setTimeout(function(){
        typeWriter();
      },1300);
      
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

    token_1=0;
    token_2=1;

      /* Quotes */

      $('.q').removeClass('move_down');

      setTimeout(function(){ 
        
        $('.qt').addClass('move_down');

      }, 1000);


      /* Typewriter */

      var txt = '< A Team of Professionals >';
    
      function typeWriter2() {
        
        if (j < txt.length) {
          document.getElementById('tm_b_span').innerHTML += txt.charAt(j);
          j++;
          setTimeout(typeWriter2, 100);
        }
      }
      setTimeout(function(){
        typeWriter2();
      },1300);

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

    /* Animation for on-click scrolling */

    var y=document.body.clientHeight;
    
    scrollv=$(this).scrollTop()

      $('.slide').click(function(e){
      e.preventDefault();
      $('html,body').stop(true, false).animate({scrollTop:y},800);
      });
    
    /* Logo Click Slide Up */

    $('#ccs_logo').click(function(e){
      
      if(scrollv>y/3)
      {
        e.preventDefault();
        $('html,body').stop(true, false).animate({scrollTop:0},800);
      }
    });

});

$(document).mousemove(function(e) {

  x = -e.pageX/100;
  y = -e.pageY/100;
  $('#logo').css('transform','translate('+ x +'px,'+ y +'px)');

});


$(document).scroll(function() {

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

  if(token_2==2)
  {
      setTimeout(function(){

      $('#qt1').css({
          '-webkit-transform' : 'translate(0px,'+ -0.2*scrollv +'%)',
          });
      
      $('#qt2').css({
          '-webkit-transform' : 'translate(0px,'+ -0.2*scrollv +'%)',
          });
      },200);
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

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
      
      if (window.matchMedia('(min-width: 768px)').matches)
      {
        $('.about').css('left','0');
        $('.events').css('left','100%');
        $('.team').css('left','200%');
      }
      /* Position Section for Windows query */
        
      if (window.matchMedia('(max-width: 768px)').matches)
      {
        $('.about').css('left','0');
        $('.events').css('left','-100%');
        $('.team').css('left','-200%');
      }

      /* */

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
      
      if (window.matchMedia('(min-width: 768px)').matches)
      {
        $('.about').css('left','-100%');
        $('.events').css('left','0');
        $('.team').css('left','100%');
      }
      /* Position Section for Windows query */

      if (window.matchMedia('(max-width: 768px)').matches)
      {
        $('.about').css('left','-200%');
        $('.events').css('left','0%');
        $('.team').css('left','-100%');

      }

      /* */


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
      
      if (window.matchMedia('(min-width: 768px)').matches)
      {
        $('.about').css('left','-200%');
        $('.events').css('left','-100%');
        $('.team').css('left','0%');
      }
      /* Position Section for Windows query */

      if (window.matchMedia('(max-width: 768px)').matches)
      {
        $('.about').css('left','-200%');
        $('.events').css('left','-100%');
        $('.team').css('left','0%');
      }

            /* */

    });

    /* Animation for on-click scrolling */

    var y=$('.content').offset().top;
    scrollv=$(this).scrollTop()

      $('.slide').click(function(e){
      e.preventDefault();
      $('html,body').stop(true, false).animate({scrollTop:y},800);
      });
    
    /* Logo Click Slide Up */

    $('#ccs_logo').click(function(e){
      
      if(scrollv>y/2)
      {
        e.preventDefault();
        $('html,body').stop(true, false).animate({scrollTop:0},1000);
      }
    });

});



$(document).mousemove(function(e) {
  
  if (window.matchMedia('(min-width: 768px)').matches)
  {
    x = -e.pageX/100;
    y = -e.pageY/100;
    $('#logo').css('transform','translate('+ x +'px,'+ y +'px)');  
  }

});


$(document).ready(function() {
    var i=0
    setInterval(function(){
    if(i%2==0){
    $('.ah_2').css('transform','translateY(0px)');
    $('.ah_1').css('transform','translateY(100px)');
    $('.ah_1').css('z-index','7');
    }
    if(i%2!=0){
    $('.ah_1').css('transform','translateY(0px)');
    $('.ah_2').css('transform','translateY(100px)');
    $('.ah_1').css('z-index','5');
    }
    i++;
    console.log(i);
    },3000);
});

$(document).scroll(function(){

    var scrollv=$(this).scrollTop();
    var h=document.body.clientHeight/1.8;
    var check=$('#ap2').offset().top-h-100;

    if(scrollv>check)
    {
      $('.svg_1').addClass('final');

      $('.intro_text').each(function(i) {

        setTimeout(function(){
          $('.intro_text').eq(i).addClass('final_it');
          },200*(i+1));
      });

      $('.head').addClass('final');
  
    }
  
    if(scrollv<check)
    {
        $('.svg_1').removeClass('final');

       $('.intro_text').removeClass('final_it');
  
        $('.head').removeClass('final');
    }
});
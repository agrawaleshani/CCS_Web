$(document).scroll(function() {

  // Slide Arrow fade In And Out
  var scrollv=$(this).scrollTop();

  if(scrollv>50)
  {
  $('.slide').fadeOut(100);
  }
  if(scrollv<50)
  {
  $('.slide').fadeIn(100);
  }


});

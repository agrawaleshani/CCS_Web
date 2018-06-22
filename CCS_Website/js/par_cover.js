$(document).scroll(function() {

  // Slide Arrow fade In And Out
  var scrollv=$(this).scrollTop();

  if(scrollv>150)
  {
  $('.slide').fadeOut(100);
  }
  if(scrollv<150)
  {
  $('.slide').fadeIn(100);
  }


});

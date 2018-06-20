$(document).ready(function() {

  var controller= new ScrollMagic.Controller();

    var controller= new ScrollMagic.Scene({
      triggerElement:'.nav',
      triggerHook:-0.1,
    })
    .setClassToggle('.btn', 'move_btn')
  /*  .addIndicators({
      name:'Pin',
      colorTrigger:'yellow',
      colorStart:'red',
      colorEnd:'Green',
    })*/
    .addTo(controller);

});

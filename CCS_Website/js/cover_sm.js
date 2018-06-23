$(document).ready(function() {

  var controller= new ScrollMagic.Controller();

    var scene= new ScrollMagic.Scene({
      triggerElement:'.nav',
      triggerHook:-0.1,
    })
    .setClassToggle('.btn', 'move_btn')
    .addTo(controller);

    var scene2= new ScrollMagic.Scene({
    triggerElement:'#ep2',
    triggerHook:0.2,
    })
    .setClassToggle('.ev2_icon', 'move_ev2_icon')
    .addTo(controller);

    var scene3= new ScrollMagic.Scene({
      triggerElement:'#ep2',
      triggerHook:0.5,
      })
     .setClassToggle('.wr', 'wr_final')
  /*    .addIndicators({
      name:'Pin',
      colorTrigger:'yellow',
      colorStart:'red',
      colorEnd:'Green',
      }) */
      .addTo(controller);

});
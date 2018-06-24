

$(document).ready(function(){

    $('html').css('overflow','hidden');

    setTimeout(function(){
        $('.loader_cover').fadeOut(2000);
        $('html').css('overflow-y','visible');
    },3000);

   

})


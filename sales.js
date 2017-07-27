function main() {

  $('.fade').mouseenter(function(){
        $('.fade').fadeTo('fast', 1);
    });
    $('.fade').mouseleave(function(){
        $('.fade').fadeTo('fast', 0.5);
        });
}

$(document).ready(main());

/**
 * Created by matheus on 11/06/14.
 */
$(function(){
    var $loremCopa = $("#lorem-copa");
    var $loremForm = $("#lorem-form");
    $("#primeira-perola").append("<div class='item blockquote-perola'><blockquote class='blockquote-reverse'>"
        +"<p>"+PEROLAS[0]+"</p>"
        +"<footer><cite>"+AUTORES[0]+"</cite></footer>"
        +"</blockquote></div>");
    for(var i=1; i<PEROLAS.length; i++){
        var perola = PEROLAS[i];
        var autor = AUTORES[i];
        $(".carousel-inner", $("#carousel-info-lorem-copa"))
            .append("<div class='item blockquote-perola'><blockquote class='blockquote-reverse'>"
                +"<p>"+perola+"</p>"
                +"<footer><cite>"+autor+"</cite></footer>"
            +"</blockquote></div>");
    }

    $loremForm.on("submit", function(ev){
        var numParagrafos = $("#campo-paragrafo").val();
        var autores = $("#campo-autores").is(":checked");
        $loremCopa.fadeOut(200, function(){
            $loremCopa.loremCopa(numParagrafos, autores);
            $loremCopa.fadeIn();
        });
        ev.preventDefault();
    });
    $loremForm.trigger('submit');

    $(window).on('keydown', function(ev){
        if(ev.keyCode==39)
            $(".right.carousel-control").trigger('click');
        if(ev.keyCode==37)
            $(".left.carousel-control").trigger('click');
    });
});
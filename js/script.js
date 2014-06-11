/**
 * Created by matheus on 11/06/14.
 */
$(function(){
    $(".lorem-copa").fadeOut(0);
    var $loremCopa = $("#lorem-copa");
    $("#gerar").on('click', function(ev){
        var numParagrafos = $("#campo-paragrafo").val();
        var autores = $("#campo-autores").is(":checked");
        $loremCopa.loremCopa(numParagrafos, autores);
        $("#lorem-form").fadeOut(0);
        $(".lorem-copa").fadeIn();
        ev.preventDefault();
        return false;
    });
    $("#volta-form").on('click', function(){
        $loremCopa.fadeOut();
        $("#lorem-form").fadeIn();
        $(this).fadeOut();
    });
});
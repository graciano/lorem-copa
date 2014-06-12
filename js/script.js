/**
 * Created by matheus on 11/06/14.
 */
$(function(){
    $(".lorem-copa").fadeOut(0);
    var $loremCopa = $("#lorem-copa");
    var $loremForm = $("#lorem-form");

    $loremForm.on("submit", function(ev){
        var numParagrafos = $("#campo-paragrafo").val();
        var autores = $("#campo-autores").is(":checked");
        $loremCopa.loremCopa(numParagrafos, autores);
        $(this).fadeOut(0);
        $(".lorem-copa").fadeIn();
        ev.preventDefault();
    });

    $("#volta-form").on('click', function(){
        $loremCopa.fadeOut();
        $loremForm.fadeIn();
        $(this).fadeOut();
    });
    $(".botao-perola").on("click", function(){
        var $perolaAtual = $(".perola-atual");
        var index = parseInt($perolaAtual.attr("data-index"));
        var incremento = parseInt($(this).attr("data-incremento"));
        var indexResultado = (index + incremento) % PEROLAS.length;
        $perolaAtual.attr("data-index", indexResultado);
        $perolaAtual.fadeOut(500, function(){
            $(this).text(PEROLAS[indexResultado]);
            $(this).fadeIn(500);
        });
    });
});
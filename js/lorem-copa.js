/**
 * Created by matheus on 11/06/14.
 */
$(function(){
    var loremCopa = function(numParagrafos, autor){
        if(isNaN(numParagrafos = parseInt(numParagrafos)))
            return false;
        var texto = "";
        for(var i=0; i<numParagrafos; i++){
            texto+="<p>";
            var minPalavras = 70 + Math.floor(Math.random()*10);//totalmente arbritário :p
            var contPalavras = 0;
            while(contPalavras<minPalavras){
                var frases = PEROLAS[Math.floor(Math.random()*PEROLAS.length)].split(".");
                var frase;
                do{
                    frase = frases[Math.floor(Math.random()*frases.length)].trim();
                    console.log("Im stuck??");
                }while(frase==="");
                texto+=frase+". ";
                contPalavras+=frase.split(" ").length;
            }
            if(autor){
                texto+="<br><br><em>        -"+ AUTORES[Math.floor(Math.random()*AUTORES.length)]+"</em>";
            }
            texto+="</p>";
        }
        return texto;
    };
    $.fn.loremCopa = function(numParagrafos, autor){
        $(this).html(loremCopa(numParagrafos, autor));
    };
});
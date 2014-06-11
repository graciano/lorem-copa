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
            var perolasUsadas = [];
            while(contPalavras<minPalavras){
                do{
                    var indexPerola = Math.floor(Math.random()*PEROLAS.length);
                    var frases = PEROLAS[indexPerola].split(".");
                    var frase;
                    do{
                        var indexFrase = Math.floor(Math.random()*frases.length);
                        frase = frases[indexFrase].trim();

                    }while(frase==="");
                }while(perolasUsadas.indexOf([indexPerola, indexFrase])!=-1);
                perolasUsadas.push([indexPerola, indexFrase]);
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
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
                var frasesUsadas = [];
                var indexPerola = Math.floor(Math.random()*PEROLAS.length);
                var frases = PEROLAS[indexPerola].split(".");
                do{
                    //removendo string vazia
                    var indexOfEmptyString = frases.indexOf("");
                    if(indexOfEmptyString!=-1)
                        frases.splice(indexOfEmptyString);

                    var indexFrase = Math.floor(Math.random()*frases.length);
                    var frase = frases[indexFrase].trim();
                }while(frasesUsadas.indexOf(indexFrase)!=-1);
                frasesUsadas.push(indexFrase);
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
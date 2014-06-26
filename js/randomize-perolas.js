/**
 * Created by matheus on 11/06/14.
 * creditos do shuffle: http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
 */
INDICES = [];
$(function(){
    function shuffle(array) {
        var currentIndex = array.length
            , temporaryValue
            , randomIndex
            ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    for(var i=0; i<PEROLAS.length; i++){
        INDICES.push(i);
    }
    INDICES = shuffle(INDICES);
});
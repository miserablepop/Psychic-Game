var guessLetters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

var wins = 0;
var losses = 0;
var guesses = 10;

var computerChoice = guessLetters[Math.floor(Math.random() * guessLetters.length)];

console.log(computerChoice);

document.onkeypress = function(event) {
    var userGuess = event.key;

    for (var i = 0; i < 10; i++){
        if(userGuess === computerChoice){
            wins++;
        }else{
            guesses--;
        }
    
        if(guesses === 0){
            losses++
        }
    
        document.getElementById('wins').innerHTML =  wins;
        document.getElementById('losses').innerHTML = losses;
        document.getElementById('guesses').innerHTML = guesses;
        document.getElementById('userChoice').insertAdjacentHTML("beforeend", userGuess + ", ");
    }
    
}   


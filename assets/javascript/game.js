// VARIABLES
// ==========================================================================


var wins = 0;
var losses = 0;
var guesses = 9;

var guessLetters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];

function randomLetter(){
    var random_choice = guessLetters[Math.floor(Math.random() * guessLetters.length)];
    return random_choice;
}

var computerChoice = randomLetter();
console.log(computerChoice);


document.onkeypress = function(event) {

    function resetWin(){
        wins++;
        document.getElementById("wins").innerHTML =  wins;
        document.querySelector("#userChoice").innerHTML = " ";
        computerChoice = randomLetter();
        console.log(computerChoice);
    }
    
    function wrongGuess(){
        guesses--;
        document.querySelector("#userChoice").insertAdjacentHTML("beforeend", userGuess + ", ");
        document.getElementById("guesses").innerHTML = guesses;
    }
    
    function resetLoss(){
        guesses = 9;
        losses++;
        document.querySelector("#guesses").innerHTML = guesses;
        document.querySelector("#userChoice").innerHTML = " ";
        document.getElementById("losses").innerHTML = losses;
        computerChoice = randomLetter();
        console.log(computerChoice);
    }

    var userGuess = event.key;

    if(userGuess === computerChoice){
        resetWin();
        
    }else{
        wrongGuess();
    }

    if(guesses === 0){
        resetLoss();
    }

    
    
}   


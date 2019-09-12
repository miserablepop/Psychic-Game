// VARIABLES
// ==========================================================================


// Setting the win/loss/guess tally variables
var wins = 0;
var losses = 0;
var guesses = 9;

// Creating an array of the alphabet to randomly choice a letter later
var guessLetters = ['a','b','c','d','e','f','g','h','i','j','k','l',
'm','n','o','p','q','r','s','t','u','v','w','x','y','z'];



// FUNCTIONS 
// ==========================================================================


// Creating a function to randomly select a letter for the user to guess
function randomLetter(){
    var random_choice = guessLetters[Math.floor(Math.random() * guessLetters.length)];
    return random_choice;
}

// For testing, storing the random letter function in a variable 
var computerChoice = randomLetter();

// For testing, using console to view the randomly selected letter 
console.log(computerChoice);



// MAIN PROCESS 
// ==========================================================================

// Key press listener for the user choice

document.onkeypress = function(event) {

    // Function to add a win, update the win value, and reset the game by choosing a new letter
    function resetWin(){
        wins++;
        document.getElementById("wins").innerHTML =  wins;
        document.querySelector("#userChoice").innerHTML = " ";
        computerChoice = randomLetter();
        console.log(computerChoice);
    }
    
    // Function to subtract a guess, update the guess value, and show the letter that the user chose
    function wrongGuess(){
        guesses--;
        document.querySelector("#userChoice").insertAdjacentHTML("beforeend", userGuess + ", ");
        document.getElementById("guesses").innerHTML = guesses;
    }

    // Function to reset guesses back to 9, update the loss value, clear the user choices, and reset game by choosing a new letter
    function resetLoss(){
        guesses = 9;
        losses++;
        document.querySelector("#guesses").innerHTML = guesses;
        document.querySelector("#userChoice").innerHTML = " ";
        document.getElementById("losses").innerHTML = losses;
        computerChoice = randomLetter();
        console.log(computerChoice);
    }

    // Storing the user key choice in a variable
    var userGuess = event.key;

    // If/Else for the game rules
    if(userGuess === computerChoice){
        resetWin();
        
    }else{
        wrongGuess();
    }

    if(guesses === 0){
        resetLoss();
    }  
    
}   


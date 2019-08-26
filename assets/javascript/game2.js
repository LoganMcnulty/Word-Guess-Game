// create an array, and random word is chosen from array
const stockWords = ["bull", "bear", "dividend", "earnings", "sector", "growth", "nasdaq", "broker", "options", "equity", "trend", "price"]
var secretWord = stockWords[Math.floor(Math.random() * stockWords.length)];
console.log(secretWord);

// create a correct/incorrect guesseses arrays to have the user's guesses pushed accordingly
var correctGuesses = [];
var incorrectGuesses = [];

// create underscores based on length of the word
var underscoreGenerator = () => {
    for(var i = 0; i <secretWord.length; i++) {
        underScores.push("_");
    }
    return underScores;
}

//push  array to #secretWordInsert
var underScores = [];
var secretWordText = document.getElementById("secretWordInsert");

console.log(underscoreGenerator());
secretWordText.textContent = underScores.join(" ");


//start tracking user key strokes
document.onkeyup = function (event) {
    //store user choice to key selected, and console to log to confirm
    var userGuess = event.key;
    //if user guess matches a letter of the secret word
    if(secretWord.includes(userGuess)){
    console.log(true);

    };

//global variables
var guessesRemaining = 8;
var wins = 0;
var losses = 0;


//variables for replacing text in HTML
var userWinsText = document.getElementById("wins");
var userLossesText = document.getElementById("losses");
var guessesSoFarText = document.getElementById("guessesSoFar");


// alert("press any key to get started");

    if(guessesRemaining === 7) {
    document.getElementById("hungManDiv").src="assets/images/hung1.png";
    };
    if(guessesRemaining === 6) {
    document.getElementById("hungManDiv").src="assets/images/hung2.png";
    };
    if(guessesRemaining === 5) {
    document.getElementById("hungManDiv").src="assets/images/hung3.png";
    };
    if(guessesRemaining === 4) {
    document.getElementById("hungManDiv").src="assets/images/hung4.png";
    };
    if(guessesRemaining === 3) {
    document.getElementById("hungManDiv").src="assets/images/hung5.png";
    };
    if(guessesRemaining === 2) {
    document.getElementById("hungManDiv").src="assets/images/hung6.png";
    };
    if(guessesRemaining === 1) {
    document.getElementById("hungManDiv").src="assets/images/hung7.png";
    };
    if(guessesRemaining === 0) {
    document.getElementById("hungManDiv").src="assets/images/hung8.png";
    };
}
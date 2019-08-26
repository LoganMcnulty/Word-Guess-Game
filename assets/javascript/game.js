$(document).ready(function() {

// word list 
const stockWords = ["bull", "bear", "dividend", "earnings", "sector", "growth", "nasdaq", "broker", "ten bagger", "options", "equity", "trend", "price"]

//Arrays
var secretWord = [];
var rightAnswers = [];
var wrongAnswers = [];
//game variables
var guessesRemaining = 8;
var wins = 0;
var losses = 0;

//variables for asking user to confirm if they'd like to play again.
// var playAgain = confirm("You lose! Play again?");

//equation for picking a random word
var secretWord = stockWords[Math.floor(Math.random() * stockWords.length)];
console.log(secretWord);

//variables for replacing text in HTML
var userWinsText = document.getElementById("wins");
var userLossesText = document.getElementById("losses");
var guessesSoFarText = document.getElementById("guessesSoFar");

// alert("press any key to get started");

gameRestart();

// game begins
document.onkeyup = function (event) {
    //store user choice to key selected, and console to log to confirm
    var userGuess = event.key;
    console.log(userGuess);

    //check if the secret word contains the letter
    var guessCheck = secretWord.includes(userGuess);
    console.log(guessCheck);

    // perform an action if guessCheck = true
    if (guessCheck) {

    }

    if(!guessCheck) {
        guessesRemaining--;
        guessesSoFar.push(userGuess + " ");
        guessesSoFarText.textContent = guessesSoFar;
    };

}

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
});
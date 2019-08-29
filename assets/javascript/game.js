// define global variables
const stockWords = ["carfires", "einhorn", "sheep", "bankruptcy", "deliveries", "fud", "tslaq", "broke", "bagholder"]
var secretWord = "";
var lettersInSecretWord = [];
var numUnderscores = 0;
var underscoresAndSuccesses = [];
var wrongGuesses = [];
var letterGuessed = "";

var wins = 0;
var losses = 0;
var numGuesses = 9;

alert("press any key on your keyboard to play");

// define the start game function, basically this just resets everything, 
// and doesn't have any logic outside of defining underscores and emptying arrays

function gameBegin() {
    numGuesses = 9;
    //choose word from stockWords array at random and reassign secretWord
    secretWord = stockWords[Math.floor(Math.random() * stockWords.length)];
    //splits letters in a string to sub strings and assign them to an array
    lettersInSecretWord = secretWord.split("");
    console.log(secretWord);
    //assign number of underscores
    numUnderscores = lettersInSecretWord.length;
    underscoresAndSuccesses = [];
    wrongGuesses = [];
    //push underscores to place holder
    for (var i = 0; i < numUnderscores; i++) {
        underscoresAndSuccesses.push("_");
      }

    // push text to HTML
    document.getElementById("guessesRemaining").innerHTML = numGuesses;
    document.getElementById("secretWordInsert").innerHTML = underscoresAndSuccesses.join(" ");
    document.getElementById("guessesSoFar").innerHTML = wrongGuesses.join(" ");
    document.getElementById("hungManDiv").src="assets/images/hung.png";
}

function roundComplete(){
  console.log("wins: " + wins + " | losses: " + losses + " | Guesses: " + numGuesses);

  document.getElementById("guessesRemaining").innerHTML = numGuesses;
  document.getElementById("secretWordInsert").innerHTML = underscoresAndSuccesses.join(" ");
  document.getElementById("guessesSoFar").innerHTML = wrongGuesses.join(" ");

  if (lettersInSecretWord.toString() === underscoresAndSuccesses.toString()) {
    wins++;
    // alert("you win!");
    document.getElementById("wins").innerHTML = wins;
    gameBegin();
  }
  else if (numGuesses === 0) {
    losses++;
    alert("You lose! The Secert word was: " + secretWord);
    document.getElementById("losses").innerHTML = losses;
    gameBegin();
  }
}


function checkGuesses(guess) {
  var guessInWord = false;
  //execute this once for each number of underscores in the secret word
  for (var i = 0; i < numUnderscores; i++) {
    //if an index of hte secret word = the letter input from the checkGuesses function
    if (secretWord[i] === guess) {
      guessInWord = true;
    }
  }

  if(guessInWord) {
    for (var j = 0; j < numUnderscores; j++) {
      if (secretWord[j] === guess) {
        underscoresAndSuccesses[j] = guess;
      }
    }
  }

  else {
    wrongGuesses.push(guess);
    numGuesses--;
  }
  if(numGuesses === 8) {document.getElementById("hungManDiv").src="assets/images/hung1.png";};
  if(numGuesses === 7) {document.getElementById("hungManDiv").src="assets/images/hung2.png";};
  if(numGuesses === 6) {document.getElementById("hungManDiv").src="assets/images/hung3.png";};
  if(numGuesses === 5) {document.getElementById("hungManDiv").src="assets/images/hung4.png";};
  if(numGuesses === 4) {document.getElementById("hungManDiv").src="assets/images/hung5.png";};
  if(numGuesses === 3) {document.getElementById("hungManDiv").src="assets/images/hung6.png";};
  if(numGuesses === 2) {document.getElementById("hungManDiv").src="assets/images/hung7.png";};
  if(numGuesses === 1) {document.getElementById("hungManDiv").src="assets/images/hung8.png";};
}


gameBegin();

document.onkeyup=function(x){
  letterGuessed = String.fromCharCode(x.which).toLowerCase();
  checkGuesses(letterGuessed);
  roundComplete();
}
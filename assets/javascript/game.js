// create an array, and random word is chosen from array
    const stockWords = ["bull", "bear", "dividend", "earnings", "sector", "growth", "nasdaq", "broker", "options", "equity", "trend", "price"]
    var secretWord; // create an unassigned secret word variable for assignment later 
    

// global variables
    var guessesSoFar = []; //store already guessed letters
    var secretWordArray = []; //store the letters that match the secret word
    var guessesRemaining = 0; 
    const resetGuesses = 8; // used for resetting the guesses amount in gameStart() function
    var wins = 0;
    var losses = 0;
    var resetGame = false; // used to dictate when to restart the game i.e. when it is set to true

//function that begins the game and used to reset the game
    function gameStart(){
    //assign secret word randomly
        secretWord = stockWords[Math.floor(Math.random() * stockWords.length)];
        console.log(secretWord); // peak at the log if you want to cheat!

        secretWordArray = []; //empties the array where correct answers from previous game are stored

    //function that adds the correct number of underscores to the secret word text
        for(var i = 0; i <secretWord.length; i++) {
            secretWordArray.push("_");
        } //push as many underscores to the secretWordArray as there are letters in the secret word

    var secretWordText = document.getElementById("secretWordInsert"); //update the HTML ID secretWordInsert with 
    secretWordText.textContent = secretWordArray.join(" "); //define secretWordText contenet, and add a space between the underscores

    //reset guessees remaining and guessed letters
    guessesRemaining = resetGuesses;
    guessesSoFar = [];

    //reset hangman pic
    document.getElementById("hungManDiv").src="assets/images/hung.png";

    pushToHTML();
    };

//function that pushes variable/text to the HTML
    function pushToHTML() {
        document.getElementById("wins").innerText = wins;
        document.getElementById("losses").innerText = losses;
        document.getElementById("guessesRemaining").innerText = guessesRemaining;
        document.getElementById("guessesSoFar").innerText = guessesSoFar;
        document.getElementById("secretWordInsert").innerText = secretWordArray.join(" ");
    };

//function to compare the guessed letters to the secret word
    function checkForMatch(guess) {
    //if guessesSoFar does not include the guess (this prevents allowing the user to guess the same letter twice)...
        if (guessesSoFar.indexOf(guess) === -1) {
        //then push the guess into the guessesSoFar array
            guessesSoFar.push(guess);
            //if guess is not in secret word, deduct guesses remaining
                if (secretWord.indexOf(guess) === -1) {
                    guessesRemaining--;
                    //update hang man pic according to guesses remaining
                    if(guessesRemaining === 7) {document.getElementById("hungManDiv").src="assets/images/hung1.png";};
                    if(guessesRemaining === 6) {document.getElementById("hungManDiv").src="assets/images/hung2.png";};
                    if(guessesRemaining === 5) {document.getElementById("hungManDiv").src="assets/images/hung3.png";};
                    if(guessesRemaining === 4) {document.getElementById("hungManDiv").src="assets/images/hung4.png";};
                    if(guessesRemaining === 3) {document.getElementById("hungManDiv").src="assets/images/hung5.png";};
                    if(guessesRemaining === 2) {document.getElementById("hungManDiv").src="assets/images/hung6.png";};
                    if(guessesRemaining === 1) {document.getElementById("hungManDiv").src="assets/images/hung7.png";};
                    if(guessesRemaining === 1) {document.getElementById("hungManDiv").src="assets/images/hung8.png";};
            }
            //otherwise, the guessed letter is in the secretWord, and update the secret word array
            else{
                //loop through the secret word as many times as the word is long
                for (var i=0; i < secretWord.length; i++) {
                    //if guess = a position of the secretword, update that same index(s) in the secret word array
                    if (guess === secretWord[i]) {
                        secretWordArray[i] = guess;
                    }
                }
            }
        }
};

function isWinner() {
    //if secret word array does not include underscores then you win and reset the game
    if(secretWordArray.indexOf("_") === -1) {
        wins++;
        resetGame=true;
    }
};

function isLoser () {
    //if guesses remaining reaches 0 then add to losses and reset the game
    if(guessesRemaining <= 0) {
        losses++;
        resetGame=true;
    }
};

//log key strokes from user
document.onkeyup = function (x) {
    var userGuess = x.key;
    //if resetGame = true due to isWinner or isLoser, then launch gameStart() function to reset. Then switch resetGame = false in order to play 
    if(resetGame) {
        gameStart();
        resetGame=false;
        checkForMatch(userGuess);
        pushToHTML();
        isWinner();
        isLoser();
    }
    console.log(userGuess);
    console.log(guessesRemaining);
    console.log(guessesRemainingText);
    console.log(guessesSoFar);
};

gameStart();
pushToHTML();

    
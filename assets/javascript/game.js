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
    secretWord = stockWords[Math.floor(Math.random() * stockWords.length)];
    console.log(secretWord); // peak at the log if you want to cheat!

    secretWordText = []; //empties the array where correct answers are stored

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

    }

    gameStart();
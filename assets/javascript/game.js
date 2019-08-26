// create an array, and random word is chosen from array
    const stockWords = ["bull", "bear", "dividend", "earnings", "sector", "growth", "nasdaq", "broker", "options", "equity", "trend", "price"]
    var secretWord = stockWords[Math.floor(Math.random() * stockWords.length)];
    console.log(secretWord);

// create underscores based on length of the word
    var underScores = [];
    var underscoreGenerator = () => {
        for(var i = 0; i <secretWord.length; i++) {
            underScores.push("_");
        }
        return underScores;
    }

//push  array to #secretWordInsert and generate underscores by calling underscoreGenerator function
    var secretWordText = document.getElementById("secretWordInsert");
    underscoreGenerator();
    secretWordText.textContent = underScores.join(" ");

//game score variables and accompanying variables for updating the HTML
    var wins = 0;
    var userWinsText = document.getElementById("wins");
    var losses = 0;
    var userLossesText = document.getElementById("losses");
    var guessesRemaining = 8;
    var guessesRemainingText = document.getElementById("guessesRemaining");
    var guessesSoFarText = document.getElementById("guessesSoFar");
    

// create a correct/incorrect guesseses arrays to have the user's guesses pushed accordingly
    var correctGuesses = [];
    var incorrectGuesses = [];

//start tracking user key strokes
    document.onkeyup = function (event) {
    //store user choice to key selected
        var userGuess = event.key;
    //if user guess matches a letter of the secret word...
        if(secretWord.includes(userGuess)){
    // then push that letter to the correctGuesses array
        correctGuesses.push(userGuess);
    // using the user guess, update the index of the underScores array that matches the index of the Secret word that the user guessed
        underScores[secretWord.indexOf(userGuess)] = userGuess;
    // update the secret word text content, and join the secret word text using a space instead of commas that is default for array values
        secretWordText.textContent = underScores.join(" ");
        console.log(secretWordText);
    }
    //else, add the incorrect userGuess to the incorrectGuesses array, update the GuessesSoFar text content in the HTML, and 
    // deduct one point from GuessesRemaining
        else{
            incorrectGuesses.push(" " + userGuess);
            console.log("incorrect guesses: " + incorrectGuesses);
            guessesSoFarText.textContent = incorrectGuesses;
            guessesRemaining--;
            console.log(guessesRemaining);
            guessesRemainingText.textContent = guessesRemaining;
        }

    // code for updating the hangman image (probably redundant)
        if(guessesRemaining === 7) {document.getElementById("hungManDiv").src="assets/images/hung1.png";};
        if(guessesRemaining === 6) {document.getElementById("hungManDiv").src="assets/images/hung2.png";};
        if(guessesRemaining === 5) {document.getElementById("hungManDiv").src="assets/images/hung3.png";};
        if(guessesRemaining === 4) {document.getElementById("hungManDiv").src="assets/images/hung4.png";};
        if(guessesRemaining === 3) {document.getElementById("hungManDiv").src="assets/images/hung5.png";};
        if(guessesRemaining === 2) {document.getElementById("hungManDiv").src="assets/images/hung6.png";};
        if(guessesRemaining === 1) {document.getElementById("hungManDiv").src="assets/images/hung7.png";};
        if(guessesRemaining === 0) {
            document.getElementById("hungManDiv").src="assets/images/hung8.png";
            losses++;
            console.log(losses);
            userLossesText.textContent = losses;
        };

        if(secretWordText === secretWord){
            console.log("you win");
        }


};

    

- a random word is chosen from the words array
- create underscores based on word length
- get users guess
- check if letter matches secret word
- if right, push to the correct array
- if wrong, push to the wrong array
- if match, add a div containing the letter's position to "theWord" div
- if no match, insert the letter to guesses so far
- if no match, update the hangman picture
- repeat process for 8 guesses
- if user constructed word = stored word, add to wins, and restart game
- if user word != stored word after 8th guess, add to losses and restart game
- 

- current problems with code
* if word has two letters, not both are inserted
* guesses remaining = 0 does not reset the game
* full word does not add to wins and reset the game 
* redundancy in hang man image code
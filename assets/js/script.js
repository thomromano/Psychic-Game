"use strict";

const letterChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let wins = 0;
let losses = 0;
let guesses = 9;
let guessesRemaining = 9;
let guessedLetters = [];
let letterToGuess = null;

let computerSelect = letterChoices[Math.floor(Math.random() * letterChoices.length)];



const updateGuessesLeft = function() {
    document.querySelector('#guessRemaining').innerHTML = 'Guesses Remaining: ' + guessesRemaining;
};

let updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.letterChoices.length)];
};

let updateGuessedLetters = function() {
    document.querySelector('#let').innerHTML = "Guesses So Far: " + guessedLetters.join(', ');
};

let reset = function() {
    totalGuesses = 9;
    guessesRemaining = 9;
    guessedLetters = [] ;

    updateLetterToGuess();
    updateGuessesRemaining();
    updateGuessedLetters();
}

updateLetterToGuess();
updateGuessesRemaining();

documnet.onkeyup = function(event) {
    guessesRemaining--;
 let playerChoice = string.fromCharCode(event.keyCode).toLoweCase();

 guessedLetters.push(playerChoice);
 updateGuessesRemaining();
 updateGuessedLetters();

    if (guessesRemaining > 0){
        if (playerChoice === letterToGuess){
            wins++;
            document.querySelector('#wins').innerHTML = 'Wins: ' + wins;
            alert('OMG you are psychic (but you already keww that, right?)');
            reset();
        }
    } else if (guessesRemaining === 0) {
        losses++;
        document.querySelector('#losses').innerHTML = 'losses: ' + losses;
        alert("Sorry, you're not psychic");
        reset();
    }

};





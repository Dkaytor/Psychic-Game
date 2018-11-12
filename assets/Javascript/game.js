// Creates an array of all letter choices

var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var userChoices = [];

// Create variables to hold stats

var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Create a function to take in user input

document.onkeyup = function (event) {
    //Holds key that was input
    var userGuess = event.key;



    //Computer randomly chooses a letter from the array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.lenghth), 1];

    

    //Write logic to compare user guess to computer guess

    if ((userGuess==computerGuess) == true) {
        wins++;
        guessesLeft = 9;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        }
        else if (userGuess !== computerGuess) {
        guessesLeft--;
        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        if (guessesLeft === 0) {
            losses++;
            guessesLeft = 9;
            var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

        }
    }

    console.log(userGuess);
    console.log(computerGuess);
    console.log(wins);
    console.log(losses);
    console.log(guessesLeft);


    //Show results on screen
    var html =
        "<p> Guess what letter I am thinking of.</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left: " + guessesLeft + "</p>" +
        "<p> Your choices so far " + userGuess + "<p>";


    //Set inner HTML contents of the #game div to our html string
    document.querySelector('#game').innerHTML = html;
}






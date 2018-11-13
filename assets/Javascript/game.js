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
    userChoices.push(userGuess);


    //Computer randomly chooses a letter from the array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    //Write logic 
    
        if ((userGuess === computerGuess)) {
            wins++;
            guessesLeft = 9;
            userChoices.length = 0;
            }      
         else if ((userGuess !== computerGuess)) {
        guessesLeft--;
    
        if (guessesLeft === 0) {
            guessesLeft = 9;
            losses++;
            userChoices.length = 0;
       
        }
    }

    


    console.log(userGuess);
    console.log(computerGuess);
    console.log(wins);
    console.log(losses);
    console.log(guessesLeft);
    console.log(userChoices);
    console.log(userChoices.length);


    //Show results on screen
    var html =
        "<p> Guess what letter I am thinking of.</p>" +
        "<p>wins: " + wins + "</p>" +
        "<p>losses: " + losses + "</p>" +
        "<p>guesses left: " + guessesLeft + "</p>" +
        "<p> Your choices so far " + userChoices + "<p>";


    //Set inner HTML contents of the #game div to our html string
    document.querySelector('#game').innerHTML = html;
}






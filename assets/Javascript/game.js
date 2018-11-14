// Creates an array of all letter choices
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Create an empty array for the user choices
var userChoices = [];


// Create variables to hold stats
var wins = 0;
var losses = 0;
var guessesLeft = 9;

//Create a function to take in user input
document.onkeyup = function (event) {
    
    //Holds key that was input
    var userGuess = event.key;

    //Saves user input and puts it into an array
    userChoices.push(userGuess);

    //Computer randomly chooses a letter from the array
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];


    //Write logic 
    
        if ((userGuess === computerGuess)) {
            //If user wins, user count goes up, guessesLeft resets to 9 and the array of user inputs is emptied
            wins++;
            guessesLeft = 9;
            userChoices.length = 0;
            }      
         else if ((userGuess !== computerGuess)) {
        //If guess is wrong guesses left goes down
            guessesLeft--;
            
            //Checks to see is max # of guesses has been used
        if (guessesLeft === 0) {
            //If there are no more guesses left, the guesses left are reset to 9, losses go up and the array of user inputs is emptied
            guessesLeft = 9;
            losses++;
            userChoices.length = 0;
       
        }
    }



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






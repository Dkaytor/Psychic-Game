
// Create variables to keep track of wins, losses and guesses left

var wins = 0;
var losses = 0;
var guessesLeft = 9;

// Start initial screen


//<p>"Wins: " + wins </p>
//<p>"Losses: " + losses </p>
//<p>"Guesses Left: " + guessesLeft </p>

var html =
"<p>You chose: " + userGuess + "</p>" +
"<p>The computer chose: " + computerGuess + "</p>" +
"<p>wins: " + wins + "</p>" +
"<p>losses: " + losses + "</p>" +
"<p>ties: " + ties + "</p>";

// Set the inner HTML contents of the #game div to our html string
document.querySelector("#game").innerHTML = html;
console.log(html)



// Create function to keep track of what user input is
document.onkeyup = function (event) {
    var userGuesses = event.key;

    // Computer randomly chooses a letter.
    function random_character() {
        var chars = "abcdefghijklmnopqrstuvwxyz";
        return chars.substr(Math.floor(Math.random() * 26), 1);
    }

    // Saves the random character as a computer guess

    var computerGuess = random_character();

    // Change user guess to lower case just in case caps lock is on

    //var newUserGuess = userGuesses.toLowerCase();

    // Compare user guess to computer guess

    if (UserGuess === computerGuess) {
        //If guess matches increase wins counter
        wins++;
    }

    else {

        //If guess is wrong show guess and take off one guess left

        guessesLeft--

    }



    // Set the inner HTML contents of the #game div to our html string
    document.querySelector("#game").innerHTML = html;


}



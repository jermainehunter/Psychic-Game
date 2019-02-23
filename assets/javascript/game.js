
console.log("Hello World");

//Create an array that that lists out the entire alphabet (our options)

var computerChoices = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//Create variables that will hold the numbers of wins, loses and guesses left

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = 0;

// Create variables that hold references to write text into my HTML and display it in the correct place

var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");

//This function is run whenever the user presses a key
document.onkeyup = function(event);

//Determines which key was pressed
var userGuess = event.key;

//Randomly chooses a choice from my options array that will be the computer's guess number.
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//The logic below will determine if user guess matches the computers guess

//Display the user and computer guesses, and wins, losses, guesses left and guesses so far
winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;


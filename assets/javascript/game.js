//Create array for word choices
const wordChoices = [
  "ellen degeneres",
  "oprah winfrey",
  "kim kardashian",
  "beyonce",
  "dwayne johnson",
  "justin bieber",
  "taylor swift",
  "rihanna",
  "leonardo dicaprio",
  "jennifer lopez",
  "drake",
  "ariana grande",
  "meghan markle",
  "will smith",
  "meryl streep"
];

// Variables
const maxGuesses = 10;
var wrongGuess = [];
var answerArray = [];
var remainingGuesses = 0;
var gameStarted = false;
var gameFinished = false;
var totalWins = 0;
var totalLosses = 0;

function resetGame() {
  remainingGuesses = maxGuesses;
  gameStarted = false;

  var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  wrongGuess = [];
  answerArray = [];

  //Add underscore for each letter of current word
  for (var i = 0; i < wordChoices[currentWord].length; i++) {
    answerArray.push("_");
  }
}

//Display the variables
function updateDisplay() {
  document.getElementById("totalWins").textContent = totalWins;
  document.getElementById("currentWord").textContent = "";
  for (var i = 0; i < answerArray.length; i++) {
    document.getElementById("currentWord").innerText += answerArray[i];
  }
  document.getElementById("remainingGuesses").textContent = remainingGuesses;
  if (remainingGuesses <= 0) {
    gameFinished = true;
  }
}
console.log(currentWord);
console.log(answerArray);

//User guess
document.onkeyup = function(event) {
  if (gameFinished) {
    resetGame();
    gameFinished = false;
  } else {
    if (event.keyCode >= 65 && event.leyCode <= 90) {
      var userGuess = event.key.toLowerCase();
      gameStarted = true;
    }

    //Check if letter has been guessed
    if (wrongGuess.indexOf(letter) === -1) {
      wrongGuess.push(letter);
      evaluateGuess(letter);
    }
  }
  updateDisplay();
  checkWin();
};

console.log(userGuess);

//if user guesses the correct letter, replace the underscore with the letter
function evaluateGuess(letter) {
  var positions = [];
  for (var i = 0; i < wordChoices[currentWord].length; i++) {
    if (wordChoices[currentWord][i] === letter) {
      positions.push(i);
    }
  }
  if (positions.length <= 0) {
    remainingGuesses--;
  } else {
    for (var i = 0; i < positions.length; i++) {
      answerArray[positions[i]] = letter;
    }
  }
}

function checkWin() {
  if (answerArray.indexOf("_") === -1) {
    totalWins++;
    hasFinished = true;
  }
}
//Word option displays as underscores on the page
//User presses key to guess a letter
//if the user guesses a letter in the computer word, then the letter replaces the underscore
//else the user's guess is displayed in guessed letters

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

  //PICKING A WORD IS NOT WORKING
  var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];
  wrongGuess = [];
  answerArray = [];

  //Add underscore for each letter of current word
  for (var i = 0; i < currentWord.length; i++) {
    answerArray.push("_");
  }
}
console.log(currentWord);
console.log(answerArray);

//User guess
document.onkeyup = function(event) {
  if ((gameFinished = true)) {
    resetGame();
    gameFinished = false;
  } else {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      var userGuess = event.key.toLowerCase();
      gameStarted = true;
    }

    //Check if letter has been guessed
    if (wrongGuess.indexOf(userGuess) === -1) {
      wrongGuess.push(userGuess);
      evaluateGuess(userGuess);
    }
  }

  //NOT WORKING - USERGUESS UNDEFINED??
  console.log(userGuess);

  document.getElementById("totalWins").textContent = totalWins;
  document.getElementById("currentWord").textContent = "";
  for (var i = 0; i < answerArray.length; i++) {
    document.getElementById("currentWord").innerText = answerArray[i];
  }
  document.getElementById("remainingGuesses").textContent = remainingGuesses;
  if (remainingGuesses <= 0) {
    gameFinished = true;
  }
  checkWin();
};

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

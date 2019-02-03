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

//Variables for tracking score
var totalWins = 0;
var totalLosses = 0;

//Choose word randomly
var currentWord = wordChoices[Math.floor(Math.random() * wordChoices.length)];

console.log(currentWord);

var answerArray = [];
var correctLetter = [];
var wrongLetter = [];
let space = 0;

//Create underscore based on length of word
var showUnderscore = () => {
  for (var i = 0; i < currentWord.length; i++) {
    if (currentWord[i] === " ") {
      answerArray.push(" ");
      space++;
    } else {
      answerArray.push("_");
    }
  }
  return answerArray;
};

console.log(showUnderscore());

//User guess
document.onkeyup = function(event) {
  // Determines which key was pressed.
  var userGuess = event.key;

  console.log(userGuess);

  //if user guesses the correct letter, replace the underscore with the letter
  if (currentWord.indexOf(userGuess) > -1) {
    correctLetter.push(userGuess);
    answerArray[currentWord.indexOf(userGuess)] = userGuess;
    if (answerArray.join(" ") === currentWord) {
      alert("You Win");
    }
  } else {
    //If user guesses the wrong letter, add to "guessedLetters"
    wrongLetter.push(userGuess);
  }
};

//Display results
document.getElementById("currentWord").textContent = "";
for (var i = 0; i < answerArray.length; i++) {
  document.getElementById("currentWord").innerText += answerArray[i];
}
document.getElementById("guessedLetters").textContent = wrongLetter;

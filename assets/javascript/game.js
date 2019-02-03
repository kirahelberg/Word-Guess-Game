//Create array for word choices
const wordChoices = [
  "ellen degeneres",
  "oprah winfrey",
  "kim kardashian",
  "jimmy fallon",
  "beyonce",
  "dwayne johnson",
  "justin bieber",
  "taylor swift",
  "jennifer aniston",
  "rihanna",
  "leonardo dicaprio",
  "jennifer lopez",
  "tom hanks",
  "george clooney",
  "robert downey jr",
  "drake",
  "ariana grande",
  "emma watson",
  "meghan markle",
  "will smith",
  "denzel washington",
  "jennifer lawrence",
  "bruce willis",
  "emma stone",
  "liam neeson",
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

//Create underscore based on length of word
var generateUnderscore = () => {
  for (var i = 0; i < currentWord.length; i++) {
    answerArray.push("_");
  }
  return answerArray;
};

console.log(generateUnderscore());

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
document.getElementById("currentWord").textContent = generateUnderscore();
document.getElementById("guessedLetters").textContent = wrongLetter;

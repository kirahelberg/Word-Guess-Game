//Create array for word choices
var wordChoices = [
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

const maxTries = 10; // Maximum number of tries player has

var guessedLetters = []; // Stores the letters the user guessed
var currentWordIndex; // Index of the current word in the array
var guessingWord = []; // This will be the word we actually build to match the current word
var remainingGuesses = 0; // How many tries the player has left
var gameStarted = false; // Flag to tell if the game has started
var hasFinished = false; // Flag for 'press any key to try again'
var wins = 0; // How many wins has the player racked up

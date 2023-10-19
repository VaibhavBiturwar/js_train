const CHANCES = 10;
const MAX = 5;
let prevGuess = [];
let remain = CHANCES;
const message = document.querySelector(".lowOrHi");

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  // CHECK CHANCES LEFT
  if (remain == 0) {
    remain = CHANCES;
    prevGuess = [];
  }
  // OBJECT REFERENCES
  const currentGuess = document.querySelector("#guessField");

  // INPUT VALIDATION
  if (!validateGuess(currentGuess.value)) {
    message.innerHTML = "Please enter a valid input";
    currentGuess.value = "";
    return;
  }

  // Check for match
  if (checkForMatch(currentGuess.value)) {
    message.innerHTML = "its a Match";
  } else {
    message.innerHTML = "not a Match";
  }

  // saving values
  prevGuess.push(currentGuess.value);
  remain -= 1;

  // Finally
  currentGuess.value = "";
  document.querySelector(".guesses").innerHTML = prevGuess.toString();
  document.querySelector(".lastResult").innerHTML = remain;
});

const validateGuess = (value) => {
  console.log("Validation", value);
  if (value < 1 || value > MAX || isNaN(value)) return false;
  return true;
};

const checkForMatch = (value) => {
  const randomNum = parseInt(Math.floor(Math.random() * 10) + 1);
  if (parseInt(value) == randomNum) return true;
  return false;
};

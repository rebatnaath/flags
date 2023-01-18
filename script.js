 let highScore = localStorage.getItem("highScore") || 0;

// Display the high score
const highScoreDisplay = document.getElementById("high-score");
highScoreDisplay.textContent = `High Score: ${highScore}`;
 
//check user's screen
if (window.innerWidth < 600) {
  document.body.classList.add("small-screen");
}

 // Array of flags
 const flags = [
  {
    image: "./svg/np.svg",
    name: "Nepal"
  },
  {
    image: "./svg/cn.svg",
    name: "China"
  },
  {
    image: "./svg/in.svg",
    name: "India"
  },
  {
    image: "./svg/pk.svg",
    name: "Pakistan"
  },
  {
    image: "./svg/us.svg",
    name: "United States"
},
{
    image: "./svg/br.svg",
    name: "Brazil"
},
{
    image: "./svg/ru.svg",
    name: "Russia"
},
{
    image: "./svg/fr.svg",
    name: "France"
},
{
    image: "./svg/au.svg",
    name: "Australia"
},
{
    image: "./svg/ca.svg",
    name: "Canada"
},
  // ... more flags
];

flags.sort(() => Math.random() - 0.5);

const flagContainer = document.getElementById("flag-container");
const flagImage = document.getElementById("flag-image");
const guessInput = document.getElementById("guess-input");
const result = document.getElementById("result");
const submitGuess = document.getElementById("submit-guess");
const restartButton = document.getElementById("restart-button");

let currentFlag = 0;
flagImage.src = flags[currentFlag].image;


let points = 0;
const pointsDisplay = document.getElementById("points");

submitGuess.addEventListener("click", function(e) {
  e.preventDefault();

 
  if (guessInput.value.trim().toLowerCase() === flags[currentFlag].name.toLowerCase()) {
    result.textContent = "Correct!";
    // Check the current flag and increment the points accordingly
    if (flags[currentFlag].name === "Nepal" || flags[currentFlag].name === "India"){
      points += 10;
    }
    else if(flags[currentFlag].name === "China" || flags[currentFlag].name === "Afghanistan"){
      points += 8;
    }
    else {
      points += 5;
    }
    // Update the points display
    pointsDisplay.textContent = `Points: ${points}`;
    currentFlag = (currentFlag + 1) % flags.length;
    flagImage.src = flags[currentFlag].image;
    guessInput.value = "";

    // Update the high score if the user's score is higher than the current high score
    if (points > highScore) {
      highScore = points;
      localStorage.setItem("highScore", highScore);
    }
    highScoreDisplay.textContent = `High Score: ${highScore}`;
  } else {
    result.textContent = "Incorrect, try again";
    guessInput.value = "";
    //resets the points to zero
    points = 0;
    pointsDisplay.textContent = `Points: ${points}`;
  }
});



restartButton.addEventListener("click", function() {
  flags.sort(() => Math.random() - 0.5);
  currentFlag = 0;
  flagImage.src = flags[currentFlag].image;
  guessInput.value = "";
  result.textContent = "";
  points = 0;
  pointsDisplay.textContent = `Points: ${points}`;
  
});
;


const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const endResult = document.querySelector("#endResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector("#reset");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");

let player;
let computer;
let computerForComparison;
let result;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Listeners when done after 10 rounds
choiceBtns.forEach(button => button.addEventListener("click", () => {
  if (roundCount >= 10) {
    endResult.textContent = "Game over. Please reset the scores to play again.";
    return;
  }
  
// Score display
  player = button.textContent.trim().toUpperCase();
  computerTurn();
  playerChoice.textContent = `Player: ${player}`;
  computerChoice.textContent = `Computer: ${computer}`;
  getResult(); 
  endResult.textContent = `Results: ${result}`; 

  //Score adds up
  updateScore(result);
  roundCount++;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  document.querySelector("#score").textContent = `Round: ${roundCount}`;

  if (roundCount >= 10) {
  displayFinalResult();
  
  }
}));

// Computer choices
function computerTurn() {
  const randNum = Math.floor(Math.random() * 3);
  switch(randNum) {
    case 0:
      computer = "🗿 ROCK";
      break;
    case 1:
      computer = "📜 PAPER";
      break;
    case 2:
      computer = "✂ SCISSORS";
      break;
  }
}

// Checking results
function getResult() {
  if (computer === player) {
    result = "A Draw!";
  } else if (computer === "🗿 ROCK" && player === "📜 PAPER") {
    result = "You Win!";
  } else if (computer === "🗿 ROCK" && player === "✂ SCISSORS") {
    result = "You Lose!";
  } else if (computer === "📜 PAPER" && player === "✂ SCISSORS") {
    result = "You Win!";
  } else if (computer === "📜 PAPER" && player === "🗿 ROCK") {
    result = "You Lose!";
  } else if (computer === "✂ SCISSORS" && player === "🗿 ROCK") {
    result = "You Win!";
  } else if (computer === "✂ SCISSORS" && player === "📜 PAPER") {
    result = "You Lose!";
  } else {
    result = "Error";
  }
  console.log(`Result: ${result}`);



}

// Adds scores 
function updateScore(result) {
  if (result === "You Win!") {
    playerScore++;
  } else if (result === "You Lose!") {
    computerScore++;
  }
}

// Display when game is over
function displayFinalResult() {
  if (playerScore > computerScore) {
    endResult.textContent = "Game over. You win! Please reset the scores to play again.";
  } else if (playerScore < computerScore) {
    endResult.textContent = "Game over. You lose! Please reset the scores to play again.";
  } else {
    endResult.textContent = "Game over. It's a tie! Please reset the scores to play again.";
  }
}

// Reset
resetBtn.addEventListener("click", resetGame);

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  roundCount = 0;
  playerChoice.textContent = 'Player: ';
  computerChoice.textContent = 'Computer: ';
  endResult.textContent = 'Results: ';
  playerScoreDisplay.textContent = 'Player: 0';
  computerScoreDisplay.textContent = 'Computer: 0';
  document.querySelector("#score").textContent = 'Round: 0';
}

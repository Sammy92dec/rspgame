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

// Listeners for choices
choiceBtns.forEach(button => button.addEventListener("click", () => {
  if (roundCount >= 10) {
    endResult.textContent = "Game over. Please reset the scores to play again.";
    return;
  }

  player = button.textContent.trim().toUpperCase();
  computerTurn();
  playerChoice.textContent = `Player: ${player}`;
  computerChoice.textContent = `Computer: ${computer}`;
  getResult(); // Call getResult to update the result variable
  endResult.textContent = `Results: ${result}`; // Display the result

  updateScore(result);
  roundCount++;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;
  document.querySelector("#score").textContent = `Round: ${roundCount}`;

  if (roundCount >= 10) {
    endResult.textContent += " Game over. Please reset the scores to play again.";
  }
}));

// Computer choices
function computerTurn() {
  const randNum = Math.floor(Math.random() * 3);
  switch(randNum) {
    case 0:
      computer = "🗿 ROCK";
      computerForComparison = "ROCK";
      break;
    case 1:
      computer = "📜 PAPER";
      computerForComparison = "PAPER";
      break;
    case 2:
      computer = "✂ SCISSORS";
      computerForComparison = "SCISSORS";
      break;
  }
}

// Checking winner
function getResult() {
  if (computerForComparison === player) {
    result = "A Draw!";
  } else if (computerForComparison === "ROCK" && player === "PAPER") {
    result = "You Win!";
  } else if (computerForComparison === "ROCK" && player === "SCISSORS") {
    result = "You Lose!";
  } else if (computerForComparison === "PAPER" && player === "SCISSORS") {
    result = "You Win!";
  } else if (computerForComparison === "PAPER" && player === "ROCK") {
    result = "You Lose!";
  } else if (computerForComparison === "SCISSORS" && player === "ROCK") {
    result = "You Win!";
  } else if (computerForComparison === "SCISSORS" && player === "PAPER") {
    result = "You Lose!";
  }
}

function updateScore(result) {
  if (result === "You Win!") {
    playerScore++;
  } else if (result === "You Lose!") {
    computerScore++;
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

const playerChoice = document.querySelector("#playerChoice");
const computerChoice = document.querySelector("#computerChoice");
const endResult = document.querySelector("#endResult");
const choiceBtns = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector("#reset");
const scoreDisplay = document.querySelector("#score");
const playerScoreDisplay = document.querySelector("#playerScore");
const computerScoreDisplay = document.querySelector("#computerScore");



let player;
let computer;
let result;
let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// Listeners for choices
choiceBtns.forEach(button => button.addEventListener("click", () => {
  if (roundCount >= 10) {
    endResult.textContent = "Game over. Please reset the scores to play again.";
    resetBtn.style.display = 'block';
    return;
}

  player = button.textContent.trim().toUpperCase();
  computerTurn();
  playerChoice.textContent = `Player: ${player}`;
  computerChoice.textContent = `Computer: ${computer}`;
  result = getResult();
  endResult.textContent = `Results: ${result}`;

  updateScore(result);
  roundCount++;
  playerScoreDisplay.textContent = `Player: ${playerScore}`;
  computerScoreDisplay.textContent = `Computer: ${computerScore}`;

  if (roundCount >= 10) {
      endResult.textContent += " Game over. Please reset the scores to play again.";
      resetBtn.style.display = 'block';
  }
}));

//Computer choices
function computerTurn(){
  const randNum = Math.floor(Math.random() * 3) + 1;
  switch(randNum){
    case 0:
        computer = "ROCK";
        break;
    case 1:
        computer = "PAPER";
        break;
    case 2:
        computer = "SCISSORS";
        break;
  }
  computerChoice.innerHTML = computerChoice
}


  // Checking winner
function getResult() {
  if (computer === player) {
    result = 'its a draw!'
  }
  if (computer === 'rock' && player === "paper") {
    result = 'you win!'
  }
  if (computer === 'rock' && player === "scissors") {
    result = 'you lost!'
  }
  if (computer === 'paper' && player === "scissors") {
    result = 'you win!'
  }
  if (computer === 'paper' && player === "rock") {
    result = 'you lose!'
  }
  if (computer === 'scissors' && player === "rock") {
    result = 'you win!'
  }
  if (computer === 'scissors' && player === "paper") {
    result = 'you lose!'
  }
  resultDisplay.innerHTML = result
} 



function updateScore(result) {
  if (result === "You Win!") {
      playerScore++;
  } else if (result === "You Lose!") {
      computerScore++;
  }
}

// Reset
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    roundCount = 0;
    playerChoice.textContent = 'Player: ';
    computerChoice.textContent = 'Computer: ';
    endResult.textContent = 'Results: ';
    playerScoreDisplay.textContent = 'Player: 0';
    computerScoreDisplay.textContent = 'Computer: 0';
    resetBtn.style.display = 'none';
}
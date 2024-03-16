function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomDraw = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomDraw];
  // console.log(computerChoice);
  return computerChoice;
}

// const computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
  const winningScenario = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  playerSelection = playerSelection.toLowerCase();

  // Tie between playerSelection and computerSelection
  if (playerSelection === computerSelection) {
    return "It's a tie! " + playerSelection + " ties with " + computerSelection;
  }

  // WinningScenarios
  if (winningScenario[playerSelection] === computerSelection) {
    return "You Win! " + playerSelection + " beats " + computerSelection;
  } else {
    return "You Lose! " + computerSelection + " beats " + playerSelection;
  }
}

let playerSelection = prompt("Enter your choice (Rock, Paper or Scissors):");
const computerSelection = getComputerChoice();
const result = playRound(playerSelection, computerSelection);
console.log(result);

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const randomDraw = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomDraw];
 // console.log(computerChoice);
  return computerChoice;
}

// const computerChoice = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    
}
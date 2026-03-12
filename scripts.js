function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice");
  return humanChoice;
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
      console.log("Its a draw");
    } else if (
      (humanSelection === "rock" && computerSelection === "scissors") ||
      (humanSelection === "paper" && computerSelection === "rock")
    ) {
      console.log("You won this round!!");
      return humanScore++;
    } else {
      console.log("Computer won this round!!");
      return computerScore++;
    }
  }

  for (let numberOfRounds = 1; numberOfRounds <= 5; numberOfRounds++) {
    playRound();
  }

  if (humanScore > computerScore) {
    console.log("You won!!!");
  } else {
    console.log("Computer won ;-;");
  }
}

playGame();

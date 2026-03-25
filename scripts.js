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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  const rockButton = document.querySelector("#rockButton");
  rockButton.addEventListener("click", () => playRound("rock"));
  const paperButton = document.querySelector("#paperButton");
  paperButton.addEventListener("click", () => playRound("paper"));
  const scissorsButton = document.querySelector("#scissorsButton");
  scissorsButton.addEventListener("click", () => playRound("scissors"));
  const resultDiv = document.querySelector("#results");

  function playRound(humanChoice) {
    const computerSelection = getComputerChoice();
    if (humanChoice === computerSelection) {
      resultDiv.textContent = `Its a draw!! | Score: You - ${humanScore}, Computer - ${computerScore}`;
    } else if (
      (humanChoice === "rock" && computerSelection === "scissors") ||
      (humanChoice === "paper" && computerSelection === "rock") ||
      (humanChoice === "scissors" && computerSelection === "paper")
    ) {
      humanScore++;
      resultDiv.textContent = `You won this round!! | Score: You - ${humanScore}, Computer - ${computerScore}`;
    } else {
      computerScore++;
      resultDiv.textContent = `Computer won this round!! | Score: You - ${humanScore}, Computer - ${computerScore}`;
    }

    if (humanScore === 5) {
      resultDiv.textContent = "You won the game";
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
    } else if (computerScore === 5) {
      resultDiv.textContent = "Computer won the game";
      rockButton.disabled = true;
      paperButton.disabled = true;
      scissorsButton.disabled = true;
    }
  }
}

playGame();

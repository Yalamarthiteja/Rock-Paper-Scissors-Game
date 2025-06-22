let userScore = 0;
let computerScore = 0;

function playGame(userChoice) {
  const choices = ["rock", "paper", "scissors"];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (userChoice === computerChoice) {
    result = "It's a draw!";
  } else if (
    (userChoice === "rock" && computerChoice === "scissors") ||
    (userChoice === "paper" && computerChoice === "rock") ||
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    userScore++;
    result = `You win! ${userChoice} beats ${computerChoice}`;
  } else {
    computerScore++;
    result = `You lose! ${computerChoice} beats ${userChoice}`;
  }

  document.getElementById("user-score").textContent = userScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = result;
}

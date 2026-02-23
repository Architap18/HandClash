let userScore = 0;
let botScore = 0;

const choices = ["rock", "paper", "scissors"];

function play(userChoice) {
  const botChoice = choices[Math.floor(Math.random() * 3)];
  const result = document.getElementById("result");

  if (userChoice === botChoice) {
    result.innerText = `Draw! Bot chose ${botChoice}`;
  } else if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) {
    userScore++;
    result.innerText = `You Win! Bot chose ${botChoice}`;
  } else {
    botScore++;
    result.innerText = `You Lose! Bot chose ${botChoice}`;
  }

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("botScore").innerText = botScore;
}

function logout() {
  window.location.href = "index.html";
}

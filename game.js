let userScore = 0;
let botScore = 0;
let totalMoves = 0;
const maxMoves = 10;
const choices = ["rock", "paper", "scissors"];
function play(userChoice) {
  if (totalMoves >= maxMoves) {
    return; //stop
  }
  const botChoice = choices[Math.floor(Math.random() * 3)];
  const result = document.getElementById("result");

  if (userChoice === botChoice) {
    result.innerText = `Draw! Bot chose ${botChoice}`;
  } 
  else if (
    (userChoice === "rock" && botChoice === "scissors") ||
    (userChoice === "paper" && botChoice === "rock") ||
    (userChoice === "scissors" && botChoice === "paper")
  ) {
    userScore++;
    result.innerText = `You Win! Bot chose ${botChoice}`;
  } 
  else {
    botScore++;
    result.innerText = `You Lose! Bot chose ${botChoice}`;
  }

  totalMoves++;

  document.getElementById("userScore").innerText = userScore;
  document.getElementById("botScore").innerText = botScore;

  checkWinner();
}

function checkWinner() {
  if (totalMoves === maxMoves) {

    const result = document.getElementById("result");

    if (userScore > botScore) {
      result.innerText = "🎉 You Won The Game!";
    } 
    else if (botScore > userScore) {
      result.innerText = "💻 Bot Won The Game!";
    } 
    else {
      result.innerText = "🤝 It's a Draw!";
    }

    setTimeout(resetGame, 2000);
  }
}

function resetGame() {
  userScore = 0;
  botScore = 0;
  totalMoves = 0;

  document.getElementById("userScore").innerText = 0;
  document.getElementById("botScore").innerText = 0;
  document.getElementById("result").innerText = "Game Reset!";
}

function logout() {
  window.location.href = "index.html";
}
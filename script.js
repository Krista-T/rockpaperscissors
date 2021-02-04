window.addEventListener("DOMContentLoaded", startGame);
let player;
let computer;
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

function startGame() {
  rock.addEventListener("click", rememberResult);
  paper.addEventListener("click", rememberResult);
  scissors.addEventListener("click", rememberResult);
}

function rememberResult(e) {
  if (e.target.classList.contains("rock")) {
    player = "rock";
  } else if (e.target.classList.contains("paper")) {
    player = "paper";
  } else if (e.target.classList.contains("scissors")) {
    player = "scissors";
  }
  console.log(player);
  computerDecision();
}

function computerDecision() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    computer = "rock";
  } else if (random == 1) {
    computer = "paper";
  } else if (random == 2) {
    computer = "scissors";
  }

  console.log(computer);
  compareResults();
}

function compareResults() {
  let result = " ";
  let draw = document.querySelector("#draw");
  let win = document.querySelector("#win");
  let lose = document.querySelector("#lose");

  if (computer == "rock" && player == "rock") {
    result = "draw";
    draw.classList.remove("hidden");
    setTimeout(() => {
      draw.classList.add("hidden");
    }, 1500);
  } else if (computer == "rock" && player == "paper") {
    result = "win";
    win.classList.remove("hidden");
    setTimeout(() => {
      win.classList.add("hidden");
    }, 1500);
  } else if (computer == "rock" && player == "scissors") {
    result = "lose";
    lose.classList.remove("hidden");
    setTimeout(() => {
      lose.classList.add("hidden");
    }, 1500);
  }

  if (computer == "paper" && player == "rock") {
    result = "lose";
    lose.classList.remove("hidden");
    setTimeout(() => {
      lose.classList.add("hidden");
    }, 1500);
  } else if (computer == "paper" && player == "paper") {
    result = "draw";
    draw.classList.remove("hidden");
    setTimeout(() => {
      draw.classList.add("hidden");
    }, 1500);
  } else if (computer == "paper" && player == "scissors") {
    result = "win";
    win.classList.remove("hidden");
    setTimeout(() => {
      win.classList.add("hidden");
    }, 1500);
  }
  if (computer == "scissors" && player == "rock") {
    result = "win";
    win.classList.remove("hidden");
    setTimeout(() => {
      win.classList.add("hidden");
    }, 1500);
  } else if (computer == "scissors" && player == "paper") {
    result = "lose";
    lose.classList.remove("hidden");
    setTimeout(() => {
      lose.classList.add("hidden");
    }, 1500);
  } else if (computer == "scissors" && player == "scissors") {
    result = "draw";
    draw.classList.remove("hidden");
    setTimeout(() => {
      draw.classList.add("hidden");
    }, 1500);
  }
  console.log(result);
}

// load content and declare global variables
window.addEventListener("DOMContentLoaded", startGame);
let player;
let computer;
const player1 = document.querySelector("#player1");
const player2 = document.querySelector("#player2");
const paperImg = "url(hand_paper.png)";
const rockImg = "url(hand_rock.png)";
const scissorsImg = "url(hand_scissors.png)";
const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

// add listeners
function startGame() {
  rock.addEventListener("click", rememberResult);
  paper.addEventListener("click", rememberResult);
  scissors.addEventListener("click", rememberResult);
}

//TODO shake animation animation

// player choice
function rememberResult(e) {
  if (e.target.classList.contains("rock")) {
    player1.style.backgroundImage = rockImg;
    player = "rock";
  } else if (e.target.classList.contains("paper")) {
    player1.style.backgroundImage = paperImg;
    player = "paper";
  } else if (e.target.classList.contains("scissors")) {
    player1.style.backgroundImage = scissorsImg;
    player = "scissors";
  }
  console.log(player);
  computerDecision();
}
// computer choice
function computerDecision() {
  let random = Math.floor(Math.random() * 3);
  if (random == 0) {
    player2.style.backgroundImage = rockImg;
    computer = "rock";
  } else if (random == 1) {
    player2.style.backgroundImage = paperImg;
    computer = "paper";
  } else if (random == 2) {
    player2.style.backgroundImage = scissorsImg;
    computer = "scissors";
  }

  console.log(computer);
  compareResults();
}

// compare and declare winner
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
      player1.style.backgroundImage = rockImg;
    }, 1200);
  } else if (computer == "rock" && player == "paper") {
    result = "win";
    win.classList.remove("hidden");
    setTimeout(() => {
      win.classList.add("hidden");
      player1.style.backgroundImage = rockImg;
    }, 1200);
  } else if (computer == "rock" && player == "scissors") {
    result = "lose";
    lose.classList.remove("hidden");
    setTimeout(() => {
      lose.classList.add("hidden");
      player1.style.backgroundImage = rockImg;
      player2.style.backgroundImage = rockImg;
    }, 1200);
  }

  if (computer == "paper" && player == "rock") {
    result = "lose";
    lose.classList.remove("hidden");
    setTimeout(() => {
      lose.classList.add("hidden");
      player1.style.backgroundImage = rockImg;
      player2.style.backgroundImage = rockImg;
    }, 1200);
  } else if (computer == "paper" && player == "paper") {
    result = "draw";
    draw.classList.remove("hidden");
    setTimeout(() => {
      draw.classList.add("hidden");
      player1.style.backgroundImage = rockImg;
      player2.style.backgroundImage = rockImg;
    }, 1200);
  } else if (computer == "paper" && player == "scissors") {
    result = "win";
    win.classList.remove("hidden");
    setTimeout(() => {
      win.classList.add("hidden");
      player1.style.backgroundImage = rockImg;
      player2.style.backgroundImage = rockImg;
    }, 1200);
  }
  if (computer == "scissors" && player == "rock") {
    result = "win";
    win.classList.remove("hidden");
    setTimeout(() => {
      win.classList.add("hidden");
      player1.style.backgroundImage = rockImg;
      player2.style.backgroundImage = rockImg;
    }, 1200);
  } else if (computer == "scissors" && player == "paper") {
    result = "lose";
    lose.classList.remove("hidden");
    setTimeout(() => {
      lose.classList.add("hidden");
      player1.style.backgroundImage = rockImg;
      player2.style.backgroundImage = rockImg;
    }, 1200);
  } else if (computer == "scissors" && player == "scissors") {
    result = "draw";
    draw.classList.remove("hidden");
    setTimeout(() => {
      draw.classList.add("hidden");
      player1.style.backgroundImage = rockImg;
      player2.style.backgroundImage = rockImg;
    }, 1200);
  }
  console.log(result);
}

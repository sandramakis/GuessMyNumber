"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// Declaring re-useable functions
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const scoreMessage = function (score) {
  document.querySelector(".score").textContent = score;
};

const displayNumber = function (value) {
  document.querySelector(".my-number").textContent = value;
};

// CLICK BUTTON FUNCTION
document.querySelector(".check").addEventListener("click", function (e) {
  e.preventDefault();

  const guessedNo = Number(document.querySelector(".guess").value);
  console.log(guessedNo);

  // When input is not a number or empty
  if (!guessedNo) {
    displayMessage("⛔ Not a number!");
    score--;
    scoreMessage(`💎 Score: ${score}`);
  }

  // when the input is INCORRECT
  else if (guessedNo !== secretNumber) {
    score--;
    guessedNo > secretNumber
      ? displayMessage("📈 Too High!")
      : displayMessage("📉 Too Low!");

    if (score > 1) {
      scoreMessage(`💎 Score: ${score}`);
    } else {
      displayMessage("☹😥 You Lost the Game!");
      scoreMessage(`💎 Score: 0`);
    }
  }

  // when the input is CORRECT
  else if (guessedNo === secretNumber) {
    displayMessage("🎉 Correct Number!");
    document.querySelector(".my-number").textContent = secretNumber;
    document.querySelector(".my-number").style.width = "8rem";
    document.querySelector("body").style.backgroundColor = "#60b347";

    //  Checking for High score
    if (score > highScore) {
      highScore = score;
      document.querySelector(
        ".highscore"
      ).textContent = `🏆 High Score: ${highScore}`;
    }
  }
});

// AGAIN BUTTON FUNCTION
document.querySelector(".again").addEventListener("click", function (e) {
  e.preventDefault();
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing. . .");
  scoreMessage(`💎 Score: ${score}`);
  displayNumber("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#111";
  document.querySelector(".my-number").style.width = "4.7rem";
});

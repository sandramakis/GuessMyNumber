"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// CLICK BUTTON FUNCTION
document.querySelector(".check").addEventListener("click", function (e) {
  e.preventDefault();
  const guessedNo = Number(document.querySelector(".guess").value);
  console.log(guessedNo);

  // When input is not a number or empty
  if (!guessedNo) {
    document.querySelector(".message").textContent = "⛔ Not a number!";
  }

  // when the input is HIGH
  else if (guessedNo > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = `💎 Score: ${score}`;
    } else {
      document.querySelector(".message").textContent = "☹😥 You Lost the Game!";
      document.querySelector(".score").textContent = `💎 Score: 0`;
    }
  }

  // when the input is LOW
  else if (guessedNo < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = `💎 Score: ${score}`;
    } else {
      document.querySelector(".message").textContent = "☹😥 You Lost the Game!";
      document.querySelector(".score").textContent = `💎 Score: 0`;
    }
  }

  // when the input is CORRECT
  else if (guessedNo === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
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
  document.querySelector(".message").textContent = "Start guessing. . .";
  document.querySelector(".score").textContent = `💎 Score: ${score}`;
  document.querySelector(".my-number").textContent = "?";
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#111";
  document.querySelector(".my-number").style.width = "5rem";
});

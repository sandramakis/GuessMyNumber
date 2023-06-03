"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

// document.querySelector(".my-number").textContent = secretNumber;

document.querySelector(".check").addEventListener("click", function (e) {
  e.preventDefault();
  const guessedNo = Number(document.querySelector(".guess").value);
  console.log(guessedNo, typeof guessedNo);

  if (!guessedNo) {
    document.querySelector(".message").textContent = "⛔ Not a number!";
  } else if (guessedNo === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
  } else if (guessedNo > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High!";
      score--;
      document.querySelector(".score").textContent = `💎 Score: ${score}`;
    } else {
      document.querySelector(".message").textContent = "☹😥 You Lost the Game!";
      document.querySelector(".score").textContent = `💎 Score: 0`;
    }
  } else if (guessedNo < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📉 Too Low!";
      score--;
      document.querySelector(".score").textContent = `💎 Score: ${score}`;
    } else {
      document.querySelector(".message").textContent = "☹😥 You Lost the Game!";
      document.querySelector(".score").textContent = `💎 Score: 0`;
    }
  }
});

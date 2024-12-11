"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector(".check");
let score = 20;

document.querySelector(".number").textContent = secretNumber;

checkButton.addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");
  const scoreText = document.querySelector(".score");
  if (!guessNumber) {
    message.textContent = "🚩 Please enter a number.";
  } else if (guessNumber === secretNumber) {
    message.textContent = "🎉 You guessed the correct number!";
  } else if (guessNumber > secretNumber) {
    message.textContent = "📈 Your number was to high.";
    score--;
    scoreText.textContent = score;
  } else if (guessNumber < secretNumber) {
    message.textContent = "📉 Your number was to low.";
    score--;
    scoreText.textContent = score;
  }
});

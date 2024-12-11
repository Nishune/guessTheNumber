"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector(".check");
let score = 20;

document.querySelector(".number").textContent = secretNumber;

checkButton.addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");
  const scoreText = document.querySelector(".score");
  const bodyHtml = document.querySelector("body");
  const secretNumberText = document.querySelector(".number");

  //When there is no input
  if (!guessNumber) {
    message.textContent = "🚩 Please enter a number.";
    //When the player wins
  } else if (guessNumber === secretNumber) {
    message.textContent = "🎉 You guessed the correct number!";
    bodyHtml.style.backgroundColor = "#60b347";
    secretNumberText.style.width = "30rem";
    //When the player guess to high
  } else if (guessNumber > secretNumber) {
    if (score > 1) {
      message.textContent = "📈 Your number was to high.";
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = "🤯 You lost the game!";
      scoreText.textContent = 0;
    }
    //when the player guess to low
  } else if (guessNumber < secretNumber) {
    if (score > 1) {
      message.textContent = "📉 Your number was to low.";
      score--;
      scoreText.textContent = score;
    } else {
      message.textContent = "🤯 You lost the game!";
      scoreText.textContent = 0;
    }
  }
});

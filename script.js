"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
const checkButton = document.querySelector(".check");
const againButton = document.querySelector(".again");
let score = 20;
let highscore = 0;

checkButton.addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");
  const scoreText = document.querySelector(".score");
  const bodyHtml = document.querySelector("body");
  const secretNumberText = document.querySelector(".number");
  const highScoreText = document.querySelector(".highscore");

  //When there is no input
  if (!guessNumber) {
    message.textContent = "🚩 Please enter a number.";
    //When the player wins
  } else if (guessNumber === secretNumber) {
    message.textContent = "🎉 You guessed the correct number!";
    secretNumberText.textContent = secretNumber;
    bodyHtml.style.backgroundColor = "#60b347";
    secretNumberText.style.width = "30rem";

    if (score > highscore) {
      highscore = score;
      highScoreText.textContent = highscore;
    }
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

againButton.addEventListener("click", () => {
  const scoreText = document.querySelector(".score");
  const message = document.querySelector(".message");
  const secretNumberText = document.querySelector(".number");
  const guessInput = document.querySelector(".guess");
  const bodyHtml = document.querySelector("body");

  secretNumber = Math.trunc(Math.random() * 20) + 1;
  scoreText.textContent = 20;
  score = 20;
  message.textContent = "Start guessing...";
  secretNumberText.textContent = "?";
  guessInput.value = "";
  secretNumberText.style.width = "15rem";
  bodyHtml.style.backgroundColor = "#222";
});

"use strict";

const checkButton = document.querySelector(".check");

checkButton.addEventListener("click", () => {
  const guessNumber = Number(document.querySelector(".guess").value);

  if (!guessNumber) {
    document.querySelector(".message").textContent = "Please enter a number.";
  } else {
    document.querySelector(".message").textContent = guessNumber;
  }
});

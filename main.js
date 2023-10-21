const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const playerText = $("#playerText");
const computerText = $("#computerText");
const resultText = $("#resultText");
const choiceBtns = $$(".choiceBtn");
let player;
let computer;
let result;
choiceBtns.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = checkWinner();
  })
);
function computerTurn() {
  const randNum = Math.floor(Math.random() * 3 + 1);
  switch (randNum) {
    case 1:
      computer = "Rock";
      break;
    case 2:
      computer = "Paper";
      break;
    case 3:
      computer = "Scissors";
      break;
  }
}
function checkWinner() {
  if (player == computer) {
    return "Draw";
  } else if (computer == "Rock") {
    return player == "Paper" ? "You win!" : "You lose";
  } else if (computer == "Paper") {
    return player == "Scissors" ? "You win!" : "You lose";
  } else if (computer == "Scissors") {
    return player == "Rock" ? "You win!" : "You lose";
  }
}

const result = document.querySelector("#result-wrapper");
const hint = document.querySelector("#hint-display");
const input = document.querySelector("#input");
const guessBtn = document.querySelector("#guess");

let number;
let guess = 0;

function generateNumber() {
  number = Math.floor(Math.random() * 100);
}

generateNumber();
guessBtn.addEventListener("click", () => {
  guess = input.value == "" ? 0 : input.value;
  hint.innerHTML = guess < number ? "Hint: Guess higher" : "Hint: Guess lower";
  result.style.display = guess == number ? "grid" : "none";
  input.value = null;
});

window.addEventListener("keypress", (e) => {
  e.key == "Enter" ? guessBtn.click() : null;
});

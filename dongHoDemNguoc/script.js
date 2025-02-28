// Truy cập phần tử
const timeInput = document.getElementById("timeInput");
const startButton = document.getElementById("startButton");
const stopButton = document.getElementById("stopButton");
const resetButton = document.getElementById("resetButton");
const timerDisplay = document.getElementById("timerDisplay");

let coutdown;
let remainingTime;

function updateDisplay(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60;
  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}: ${String(
    secondsLeft
  ).padStart(2, "0")}`;
}

startButton.addEventListener("click", function () {
  const inputTime = parseInt(timeInput.value, 10);
  if (isNaN(inputTime) || inputTime <= 0) {
    alert("Please enter a valid number of seconds.");
    return;
  }
  remainingTime = inputTime;
  updateDisplay(remainingTime);
  startButton.disable = true; // vô hiệu hoá nút Start

  coutdown = setInterval(function () {
    remainingTime--;
    updateDisplay(remainingTime);

    if (remainingTime <= 0) {
      clearInterval(coutdown);
      alert("Time's up");
      startButton.disable = false;
    }
  }, 1000);
});

stopButton.addEventListener("click", function () {
  clearInterval(coutdown);
  startButton.disable = false;
});

resetButton.addEventListener("click", function () {
  clearInterval(coutdown);
  remainingTime = 0;
  updateDisplay(remainingTime);
  startButton.disable = false;
  timeInput.value = "";
});

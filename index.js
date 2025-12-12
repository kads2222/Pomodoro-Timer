let timeDisplay = document.getElementById("time");
let startBtn = document.getElementById("start-pause");
let startIcon = document.getElementById("start-pause-icon");
let resetBtn = document.getElementById("reset");

let totalTime = 25 * 60;
let timer = null;
let isRunning = false;

function updateDisplay() {
  let minutes = Math.floor(totalTime / 60);
  let seconds = totalTime % 60;
  timeDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
}

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    startIcon.classList.remove("fa-play");
    startIcon.classList.add("fa-pause");
    timer = setInterval(() => {
      if (totalTime > 0) {
        totalTime--;
        updateDisplay();
      } else {
        clearInterval(timer);
        isRunning = false;
        startIcon.classList.remove("fa-pause");
        startIcon.classList.add("fa-play");
        alert("time is up");
      }
    }, 1000);
  } else {
    clearInterval(timer);
    isRunning = false;
    startIcon.classList.remove("fa-pause");
    startIcon.classList.add("fa-play");
  }
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  totalTime = 25 * 60;
  startIcon.classList.remove("fa-pause");
  startIcon.classList.add("fa-play");
  updateDisplay();
}

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

updateDisplay();

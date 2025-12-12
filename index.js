let timeDisplay = document.getElementById("time");
let startbtn = document.getElementById("start");
let pausebtn = document.getElementById("pause");
let resetbtn = document.getElementById("reset");

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
  if (isRunning) return;
  isRunning = true;
  startbtn.disabled = true;
  pausebtn.disabled = false;

  timer = setInterval(() => {
    if (totalTime > 0) {
      totalTime--;
      updateDisplay();
    } else {
      clearInterval(timer);
      isRunning = false;
      startbtn.disabled = false;
      pausebtn.disabled = true;
      alert("time is up take a break ");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timer);
  isRunning = false;
  startbtn.disabled = false;
  pausebtn.disabled = true;
}

function resetTimer() {
  clearInterval(timer);
  isRunning = false;
  totalTime = 25 * 60;
  updateDisplay();
  startbtn.disabled = false;
  pausebtn.disabled = true;
}

startbtn.addEventListener("click", startTimer);
pausebtn.addEventListener("click", pauseTimer);
resetbtn.addEventListener("click", resetTimer);

updateDisplay();

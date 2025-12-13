const toggle = document.getElementById("toggle");
let timeDisplay = document.getElementById("time");
let startBtn = document.getElementById("start-pause");
let startIcon = document.getElementById("start-pause-icon");
let resetBtn = document.getElementById("reset");
let miniSession = document.getElementById("mini");
let longSession = document.getElementById("long");
let breakSession = document.getElementById("break");
let openModalbtn = document.getElementById("custom");
let modal = document.getElementById("modal");
let timeInput = document.getElementById("timeInput");
let error = document.getElementById("errorMsg");
let timeSetBtn = document.getElementById("setCustom");
let cancelBtn = document.getElementById("cancel");

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
        totalTime = 25 * 60;
        updateDisplay();
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

function displayTime(time) {
  totalTime = time * 60;
  updateDisplay();
}

function customTime(duration) {
  if (duration <= 60 && duration > 0) {
    errorMsg.textContent = "";
    displayTime(duration);
    modal.style.display = "none";
  } else {
    error.textContent = "Please enter the session between 1 and 60 minutes";
  }
}

toggle.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});

startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

miniSession.addEventListener("click", () => {
  displayTime(25);
});
longSession.addEventListener("click", () => {
  displayTime(60);
});
breakSession.addEventListener("click", () => {
  displayTime(5);
});

openModalbtn.addEventListener("click", () => {
  modal.style.display = "flex";
});

cancelBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

timeSetBtn.addEventListener("click", () => {
  customTime(timeInput.value);
});

updateDisplay();
modal.style.display = "none";

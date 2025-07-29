let timerDisplay = document.getElementById("timer");
let stopBtn = document.getElementById("stopBtn");

let totalSeconds = 1500;
let interval = null;
let isRunning = false;

function updateDisplay() {
  let minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  let seconds = String(totalSeconds % 60).padStart(2, '0');
  timerDisplay.textContent = `${minutes} : ${seconds}`;
}

function toggleTimer() {
  if (isRunning) {
    clearInterval(interval);
    stopBtn.textContent = "Start";
  } else {
    interval = setInterval(() => {
      if (totalSeconds > 0) {
        totalSeconds--;
        updateDisplay();
      } else {
        clearInterval(interval);
        stopBtn.textContent = "Start";
        isRunning = false;
      }
    }, 1000);
    stopBtn.textContent = "Stop";
  }
  isRunning = !isRunning;
}

function resetTimer() {
  clearInterval(interval);
  totalSeconds = 1500;
  updateDisplay();
  stopBtn.textContent = "Start";
  isRunning = false;
}

// Set theme
function setTheme(theme) {
  document.body.className = theme;
}

// Initial load
updateDisplay();

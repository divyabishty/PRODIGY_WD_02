let startTime = 0;
let elapsedTime = 0;
let timerInterval;

document.getElementById("start").addEventListener("click", startTimer);
document.getElementById("pause").addEventListener("click", pauseTimer);
document.getElementById("reset").addEventListener("click", resetTimer);

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(updateTimer, 10);
  document.getElementById("start").disabled = true;
  document.getElementById("pause").disabled = false;
  document.getElementById("reset").disabled = false;
}

function pauseTimer() {
  clearInterval(timerInterval);
  elapsedTime = Date.now() - startTime;
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("reset").disabled = false;
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  startTime = 0;
  document.getElementById("timer").textContent = "00:00:00:000";
  document.getElementById("start").disabled = false;
  document.getElementById("pause").disabled = true;
  document.getElementById("reset").disabled = true;
}

function updateTimer() {
  let currentTime = Date.now() - startTime;
  let totalSeconds = Math.floor(currentTime / 1000);
  let hours = Math.floor(totalSeconds / 3600);
  let minutes = Math.floor((totalSeconds % 3600) / 60);
  let seconds = totalSeconds % 60;
  let milliseconds = Math.floor((currentTime % 1000) / 10);

  document.getElementById("timer").textContent =
    pad(hours) +
    ":" +
    pad(minutes) +
    ":" +
    pad(seconds) +
    ":" +
    pad(milliseconds, 3);
}

function pad(num, size = 2) {
  let s = "0" + num;
  return s.substr(s.length - size);
}
let startBtn = document.querySelector("button.play");
let stopBtn = document.querySelector("button.stop");
let resetBtn = document.querySelector("button.reset");
let timer = document.getElementById("timer");

let sec: any = "0";
let min: any = "0";
let hours: any = "0";
let timeout;

let stopped: boolean = true;

startBtn?.addEventListener("click", launch);
resetBtn?.addEventListener("click", reset);
stopBtn?.addEventListener("click", stopTimer);

function launch(): void {
  if (stopped) {
    stopped = false;
    starting();
  }
}

function starting(): void {
  let intArr: number[] = [+sec, +min, +hours];
  sec = parseInt(sec);
  min = parseInt(min);
  hours = parseInt(hours);

  if (stopped) {
    return;
  }
  sec += 1;
  if (sec >= 60) {
    min += 1;
    sec = 0;
  }
  if (min >= 60) {
    hours += 1;
    min = 0;
  }
  if (sec < 10) {
    sec = "0" + sec;
  }
  if (min < 10) {
    min = "0" + min;
  }
  if (hours < 10) {
    hours = "0" + hours;
  }
  timer.textContent = `${hours}:${min}:${sec}`;
  timeout = setTimeout(starting, 1000);
}

function reset(): void {
  stopped = true;
  timer.textContent = "00:00:00";
  sec = 0;
  min = 0;
  hours = 0;
  clearTimeout(timeout);
}

function stopTimer(): void {
  if (!stopped) {
    stopped = true;
    clearTimeout(timeout);
  }
}

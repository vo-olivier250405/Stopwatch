let startBtn = document.querySelector("button.play");
let stopBtn = document.querySelector("button.stop");
let resetBtn = document.querySelector("button.reset");
let timer = document.getElementById("timer");

let sec: string = "0";
let min: string = "0";
let hours: string = "0";

let stopped: boolean = true;

startBtn?.addEventListener("click", launch);
resetBtn?.addEventListener("click", reset);

function launch() {
  stopped = false;
  starting();
}

function starting() {
  let intArr: number[] = [+sec, +min, +hours];
  if (stopped) {
    return;
  }
  intArr[0] += 1;
  if (intArr[0] >= 60) {
    intArr[1] += 1;
    intArr[0] = 0;
  }
  if (intArr[1] >= 60) {
    intArr[2] += 1;
    intArr[1] = 0;
  }
  timer.textContent = `${intArr[0].toString()}:${intArr[1].toString()}:${intArr[2].toString()}`;
}

function reset() {
  timer.textContent = "00:00:00";
  sec = "0";
  min = "0";
  hours = "0";
}

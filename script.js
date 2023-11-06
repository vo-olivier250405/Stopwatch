var startBtn = document.querySelector("button.play");
var stopBtn = document.querySelector("button.stop");
var resetBtn = document.querySelector("button.reset");
var timer = document.getElementById("timer");
var sec = "0";
var min = "0";
var hours = "0";
var stopped = true;
startBtn === null || startBtn === void 0
  ? void 0
  : startBtn.addEventListener("click", launch);
resetBtn === null || resetBtn === void 0
  ? void 0
  : resetBtn.addEventListener("click", reset);
function launch() {
  stopped = false;
  starting();
}
function starting() {
  var intArr = [+sec, +min, +hours];
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
  timer.textContent = ""
    .concat(intArr[0].toString(), ":")
    .concat(intArr[1].toString(), ":")
    .concat(intArr[2].toString());
}
function reset() {
  timer.textContent = "00:00:00";
  sec = "0";
  min = "0";
  hours = "0";
}

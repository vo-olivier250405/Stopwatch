var startBtn = document.querySelector("button.play");
var stopBtn = document.querySelector("button.stop");
var resetBtn = document.querySelector("button.reset");
var timer = document.getElementById("timer");
var sec = "0";
var min = "0";
var hours = "0";
var timeout;
var stopped = true;
startBtn === null || startBtn === void 0 ? void 0 : startBtn.addEventListener("click", launch);
resetBtn === null || resetBtn === void 0 ? void 0 : resetBtn.addEventListener("click", reset);
stopBtn === null || stopBtn === void 0 ? void 0 : stopBtn.addEventListener("click", stopTimer);
function launch() {
    if (stopped) {
        stopped = false;
        starting();
    }
}
function starting() {
    var intArr = [+sec, +min, +hours];
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
    timer.textContent = "".concat(hours, ":").concat(min, ":").concat(sec);
    timeout = setTimeout(starting, 1000);
}
function reset() {
    stopped = true;
    timer.textContent = "00:00:00";
    sec = 0;
    min = 0;
    hours = 0;
    clearTimeout(timeout);
}
function stopTimer() {
    if (!stopped) {
        stopped = true;
        clearTimeout(timeout);
    }
}

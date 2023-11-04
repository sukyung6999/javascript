// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');

let timerId;

let [msec, sec, min] = [0, 0, 0];

const displayTimer = () => {
    const time = document.querySelector('.time');
    const fMin = min < 10 ? `0${min}` : `${min}`;
    const fSec = sec < 10 ? `0${sec}` : `${sec}`;
    const fMsec = msec < 10 ? `0${msec}` : `${msec}`;
    time.innerText = `${fMin} : ${fSec} : ${fMsec}`;
}

const timer = () => {
    msec++; // 0.01초씩 증가

    if (msec === 100) {
        msec = 0;
        sec++;
    }

    if (sec === 60) {
        sec = 0;
        min++
    }

    // console.log(min, sec, msec);
    displayTimer();
}

const start = () => {
    timerId = setInterval(timer, 10);
};
const stop = () => {
    clearInterval(timerId);
};
const reset = () => {
    stop();
    [msec, sec, min] = [0, 0, 0];
    displayTimer();
};

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
const startButton = document.querySelector('.start');
const stopButton = document.querySelector('.stop');
const resetButton = document.querySelector('.reset');
const time = document.querySelector('.time');

let timerId;

const displayClock = (min, sec, Msec) => {
    const fMin = min < 10 ? `0${min}` : `${min}`;
    const fSec = sec < 10 ? `0${sec}` : `${sec}`;
    const fMSec = Msec < 10 ? `0${Msec}` : `${Msec}`;

    time.innerText = `${fMin} : ${fSec} : ${fMSec}`
}

let [min, sec, Msec] = [0,0,0];
const clock = () => {
    
    Msec++;
    
    if (Msec === 100) {
        Msec = 0;
        sec++;
    }
    if (sec === 60) {
        sec = 0;
        min++;
    }

    displayClock(min, sec, Msec);
}

const start = () => {
    timerId = setInterval(clock, 10);
}
const stop = () => {
    clearInterval(timerId);
}
const reset = () => {
    clearInterval(timerId);
    time.innerText = '00 : 00 : 00';
}

startButton.addEventListener('click', start);
stopButton.addEventListener('click', stop);
resetButton.addEventListener('click', reset);
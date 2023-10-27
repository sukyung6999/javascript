const video = document.querySelector('video');
const toggleButton = document.querySelector('.play-pause');
const rates = document.querySelectorAll('.rate');
const volumeInput = document.querySelector('input');

const updateProgress = () => {
    const bar = document.querySelector('.bar');

    const progress = (video.currentTime / video.duration ) * 100;
    bar.style.width = `${progress}%`

    if (video.paused) {
        pause();
    }
}

const formatting = (time) => {
    const sec = Math.floor(time % 60);
    const min = Math.floor((time / 60) % 60);
    const hour = Math.floor(time / 3600);

    const fSec = sec < 10 ? `0${sec}` : sec;
    const fMin = min < 10 ? `0${min}` : min;
    const fHour = hour < 10 ? `0${hour}` : hour;

    return `${fHour}:${fMin}:${fSec}`;
}

const updateTime = () => {
    const current = document.querySelector('.current');
    const duration = document.querySelector('.duration');

    current.innerText = formatting(video.currentTime);
    duration.innerText = formatting(video.duration);
}

const activeVolume = (event) => {
    video.volume = event.target.value;
}

const activeRate = (event) => {
    const {rate} = event.target.dataset;
    video.playbackRate = rate;
}

const play = () => {
    video.play();
    toggleButton.innerText = '||'
}
const pause = () => {
    video.pause();
    toggleButton.innerText = '▸'
}

const playPause = () => {
    video.paused ? play() :pause();
}

toggleButton.addEventListener('click', playPause);
rates.forEach((rate) => {
    rate.addEventListener('click', activeRate);
})
volumeInput.addEventListener('change', activeVolume);
video.addEventListener('timeupdate', updateTime);
video.addEventListener('timeupdate', updateProgress);
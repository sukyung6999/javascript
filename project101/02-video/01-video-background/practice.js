const button = document.querySelector('button');
const video = document.querySelector('video');

const videoControl = () => {
    if (video.paused) {
        video.play();
        button.innerText = 'Pause'
    } else {
        video.pause();
        button.innerText = 'Play'
    }
}

button.addEventListener('click', videoControl);
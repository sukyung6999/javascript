// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.

const button = document.querySelector('button');

const togglePlay = (event) => {
    // event.preventDefault();

    const video = document.querySelector('video');
    // console.log(video.paused);
    if (video.paused) {
        button.innerText = 'Pause';
        video.play();
    } else {
        button.innerText = 'Play';
        video.pause();
    }
}

button.addEventListener('click', togglePlay);
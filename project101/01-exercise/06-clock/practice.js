const hour = document.querySelector('.hour');
const min = document.querySelector('.min');
const sec = document.querySelector('.sec');

const clock = () => {
    const now = new Date();

    hour.innerText = now.getHours();
    min.innerText = now.getMinutes();
    sec.innerText = now.getSeconds();
}

setTimeout(clock, 10);
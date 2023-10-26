const images = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let idx = 0;

const updateImage = () => {
    images.forEach((image) => {
        image.classList.remove('show');
    })
    images[idx].classList.add('show');
}

const moveLeft = () => {
    if (idx === 0) {
        idx = 2;
    } else {
        idx--;
    }
    updateImage();
}

const moveRight = () => {
    if (idx === 2) {
        idx = 0;
    } else {
        idx++;
    }
    updateImage();
}

prevButton.addEventListener('click', moveLeft);
nextButton.addEventListener('click', moveRight);
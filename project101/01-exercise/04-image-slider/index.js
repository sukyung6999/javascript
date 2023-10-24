// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.

const images = document.querySelectorAll('.item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0;
let lastIndex = images.length - 1;

const updateImage = () => {
    images.forEach((img) => {
        img.classList.remove('show');
    })
    images[index].classList.add('show');
}

const moveToPrev = () => {
    if (index === 0) {
        index = 2;
    } else {
        index--;
    }
    updateImage();
};

const moveToNext = () => {
    if (index === 2) { 
        index = 0;
    } else {
        index++;
    } 
    // console.log(index);;
   updateImage();
};

prevButton.addEventListener('click', moveToPrev);
nextButton.addEventListener('click', moveToNext);
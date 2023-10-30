const canvas = document.querySelector('canvas');
const imageFile = document.querySelector('#image-file');
const texts = document.querySelectorAll('.text');
const topTextInput = document.querySelector('#top-text');
const bottomTextInput = document.querySelector('#bottom-text');

const ctx = canvas.getContext('2d');

let image, width, height;

let topText = '', bottomText = '';

const drawText = () => {
    const offsetY = height / 20;
    const fontSize = width / 10;

    ctx.font = `${fontSize}px sans-serif`;
    ctx.textAlign = 'center';
    ctx.fillStyle = 'white';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = fontSize / 5;
    ctx.lineJoin = 'round';

    ctx.textBaseline = 'top';
    ctx.strokeText(topText, width / 2, offsetY);
    ctx.fillText(topText, width / 2, offsetY);

    ctx.textBaseline = 'bottom';
    ctx.strokeText(bottomText, width / 2, height - offsetY);
    ctx.fillText(bottomText, width / 2, height - offsetY);
}

const updateTopText = (event) => {
    topText = event.target.value;
    drawText(topText);
}

const updateBottomText = (event) => {
    bottomText = event.target.value;
    drawText(bottomText);
}

const showInputs = () => {
    texts.forEach((text) => {
        text.style.display = 'block';
    })
}

const uploadFile = () => {
    width = image.width;
    height = image.height;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0);
    showInputs();
}

const createImage = (event) => {
    const imageURL = URL.createObjectURL(event.target.files[0]);

    image = document.createElement('img');
    image.src = imageURL;
    image.addEventListener('load', uploadFile);
}

imageFile.addEventListener('change', createImage);
topTextInput.addEventListener('change', updateTopText);
bottomTextInput.addEventListener('change', updateBottomText);
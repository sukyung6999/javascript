const canvas = document.querySelector('canvas');
const imageFile = document.querySelector('#image-file');
const textInputs = document.querySelector('.text');
const topTextInput = document.querySelector('#top-text');
const bottomTextInput = document.querySelector('#bottom-text');

let ctx = canvas.getContext('2d');

let image,width, height;
let topText = '';
let bottomText = '';

const drawText = () => {
    const offsetY = canvas.height / 20;
    const fontSize = canvas.width / 10;

    ctx.font = `${fontSize}pz sans-serif`;
    ctx.fillStyle = 'white';
    ctx.textAlign = 'center';
    ctx.strokeStyle = 'black';
    ctx.lineWidth = fontSize / 5;
    ctx.lineJoin = 'round';

    ctx.textBaseline = 'top';
    ctx.strokeText(topText, width / 2, offsetY);
    ctx.fillText(topText, width / 2, offsetY);

    ctx.textBaseline = 'bottom';
    ctx.strokeText(bottomText, width / 2, canvas.height - offsetY);
    ctx.fillText(bottomText, width / 2, canvas.height - offsetY);
}

const updateTopText = (event) => {
    topText = event.target.value;
    drawText(topText);
};
const updateBottomText = (event) => {
    bottomText = event.target.value;
    drawText(bottomText);
};

const showInputs = () => {
    textInputs.style.display = 'block'; 
}

const uploadImage = () => {
    width = image.width;
    height = image.height;

    canvas.width = width;
    canvas.height = height;

    ctx.drawImage(image, 0, 0);
    showInputs();
}

const createImage = (event) => {
    const imageUrl = URL.createObjectURL(event.target.file[0]);

    image = document.createElement('img');
    image.src = imageUrl;
    image.addEventListener('load', uploadImage);
}

imageFile.addEventListener('change', createImage);
topTextInput.addEventListener('change', updateTopText);
bottomTextInput.addEventListener('change', updateBottomText);

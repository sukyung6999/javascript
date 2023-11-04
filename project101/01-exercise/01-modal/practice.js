const openButton = document.querySelector('.open');
const modal = document.querySelector('.container');
const closeButton = document.querySelector('.close');

openButton.addEventListener('click', (event) => {
    event.preventDefault();
    
    modal.style.display = 'flex';
    openButton.style.display = 'none';
})

closeButton.addEventListener('click', () => {
    event.preventDefault();

    modal.style.display = 'none';
    openButton.style.display = 'block';
})
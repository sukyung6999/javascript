const button = document.querySelector('button');

const submit = (event) => {
    event.preventDefault();

    const input = document.querySelector('input');
    const li = document.createElement('li');
    li.innerText = input.value;
    console.log(li);

    const ul = document.querySelector('ul');
    ul.appendChild(li);
    input.value = '';
}

button.addEventListener('click', submit);
const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

let todos = [];

const save = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
}

const delItem = (event) => {
    const target = event.target.parentElement;
    target.remove();
    
    todos = todos.filter((todo) => todo.id !== parseInt(target.id));
    save();
}

const addItem = (todo) => {
    if (todo.text !== '') {
        const li = document.createElement('li');
        const span = document.createElement('span');
        const button = document.createElement('button');

        span.innerText = todo.text;
        button.innerText = '삭제';

        button.addEventListener('click', delItem);

        li.appendChild(span);
        li.appendChild(button);
        ul.appendChild(li);

        li.id = todo.id;
        
    }
}

const handler = (event) => {
    event.preventDefault();

    const todo = {
        id: Date.now(),
        text: input.value
    }
    todos.push(todo);
    addItem(todo);
    save();
    input.value = ''
}

const init = () => {
    const userTodos = JSON.parse(localStorage.getItem('todos'));

    if (userTodos) {
        userTodos.forEach((todo) => {
            addItem(todo);
        })
        todos = userTodos
    }
}
init();

form.addEventListener('submit', handler);
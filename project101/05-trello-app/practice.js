const form = document.querySelector('form');
const blocks = document.querySelectorAll('.list');

let from, to, newTodo;

const todoList = [], doingList = [], doneList = [];

const lists = {
    todo: todoList,
    doing: doingList,
    done: doneList,
}

const updateList = (id) => {
    lists[id].forEach((todo) => {
        createElement(id, todo);
    })
}

const addItem = () => {
    const id = to.id;

    lists[id].push({
        'id': newTodo.id,
        'text': newTodo.innerText
    });
    updateList(id);
}

const removeItem = () => {
    const id = from.id;
    const list = document.querySelector(`#${id}`);
    // list.remove();

    lists[id] = lists[id].filter((item) => item.id !== newTodo.id);
    updateList(id);
}

const dragEnd = () => {
    removeItem();
    addItem();
}

const dragOver = (event) => {
    if (event.target.className === 'list') {
        to = event.target;
    } else {
        to = from;
    }
}

const dragStart = (event) => {
    from = event.target.parentElement;
    newTodo = event.target;
}

const createElement = (type, todo) => {
    const list = document.querySelector(`#${type}`);
    const item = document.createElement('div');

    item.id = todo.id;
    item.className = 'item';
    item.draggable = true;
    item.innerText = todo.text;

    list.append(item);
    
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);

    localStorage.setItem(type, JSON.stringify(todo));
}

const createTodo = (event) => {
    event.preventDefault();
    
    const input = document.querySelector('input');
    const todo = {
        'id': uuidv4(),
        'text': input.value
    }
    lists['todo'].push(todo);
    createElement('todo', todo);
    input.value = '';
}

form.addEventListener('submit', createTodo);
blocks.forEach((block) => {
    block.addEventListener('dragover', dragOver);
})

const init = () => {
    const myList = lists.forEach((list) => {
        JSON.parse(localStorage.getItem(list.key, list.value));
    })
    lists = myList;
    lists.forEach((list) => {
        createElement(list.key, list.value);
    })
}

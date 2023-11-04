const form = document.querySelector('form');
const blocks = document.querySelectorAll('.block');

let from, to;

let todoList = [], doingList = [], doneList = [];
const lists = {
    todo: todoList,
    doing: doingList,
    done: doneList
}

const dragEnd = (event) => {
    if (from === to) return;

    const {id} = event.target;

    event.target.remove();

    lists[from] = lists[from].filter((todo) => {
        if (todo.id !== id) {
            return todo;
        } else {
            createElement(to, todo);
        }
    })
    console.log(lists[from]);
}

const dragOver = (event) => {
    event.preventDefault();

    const {id} = event.target;

    const listIds = Object.keys(lists);

    if (listIds.includes(id)) {
        to = id;
    }
}

const dragStart = (event) => {
    from = event.target.parentElement.id;
    to = from;
}

const createElement = (listId, todo) => {
    const list = document.querySelector(`#${listId}`)
    const item = document.createElement('div');

    item.id = todo.id;
    item.className = 'item';
    item.draggable = true;
    item.innerText = todo.text;

    list.append(item);
    lists[listId].push(todo);

    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
}

const createTodo = (event) => {
    event.preventDefault();

    const id = uuidv4();
    const input = document.querySelector('input');

    const newTodo = {
        id,
        text: input.value
    }
    createElement('todo', newTodo);
    input.value = ''
}

form.addEventListener('submit', createTodo);
blocks.forEach((block) => {
    block.addEventListener('dragover', dragOver);
})
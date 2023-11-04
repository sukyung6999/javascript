const form = document.querySelector('form');
const blocks = document.querySelectorAll('.block');

let to;

let todoList = [], doingList = [], doneList = [];

const lists = {
    todo: todoList,
    doing: doingList,
    done: doneList
};

const removeTodo = (event) => {
    event.preventDefault();

    event.target.remove();

    const {id: parentId} = event.target.parentElement;
    const {id: targetId} = event.target;

    lists[parentId] = lists[parentId].filter((item) => item.id !== targetId);
    saveList(parentId);
}

const saveList = (listId) => {
    localStorage.setItem(listId, JSON.stringify(lists[listId]));
}

const dragEnd = (event) => {
    const from = event.target;
    const {id: fromId} = from.parentElement;

    if (fromId === to) return;

    event.target.remove();

    lists[fromId] = lists[fromId].filter((item) => {
        if(item.id !== from.id) {
            return item;
        } else {
            createElement(to, item);
        }
    })
    saveList(fromId);
}

const dragOver = (event) => {
    event.preventDefault();

    const {id} = event.target;
    if(Object.keys(lists).includes(id)) {
        to = id;
    }
}

const createElement = (listId, todo) => {
    const list = document.querySelector(`#${listId}`);
    const item = document.createElement('div');

    item.id = todo.id;
    item.className = 'item';
    item.draggable = true;
    item.innerText = todo.text;

    list.append(item);
    lists[listId].push(todo);
    saveList(listId);

    item.addEventListener('dragend', dragEnd);
    item.addEventListener('contextmenu', removeTodo);
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
    input.value = '';
}

form.addEventListener('submit', createTodo);
blocks.forEach((block) => {
    block.addEventListener('dragover', dragOver);
})

const init = () => {
    const myTodoList = JSON.parse(localStorage.getItem('todo'));
    const myDoingList = JSON.parse(localStorage.getItem('doing'));
    const myDoneList = JSON.parse(localStorage.getItem('done'));

    if (myTodoList) {
        myTodoList.forEach((todo) => {
            createElement('todo', todo);
        })
    }
    if (myDoingList) {
        myDoingList.forEach((doing) => {
            createElement('doing', doing);
        })
    }
    if (myDoneList) {
        myDoneList.forEach((done) => {
            createElement('done', done);
        })
    }
}
init();
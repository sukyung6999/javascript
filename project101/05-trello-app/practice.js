const form = document.querySelector('form');
const blocks = document.querySelectorAll('.list');

let from, to;

const todoList = [], doingList = [], doneList = [];

const lists = {
    todo: todoList,
    doing: doingList,
    done: doneList,
}

const saveList = (listId, list) => {
    localStorage.setItem(listId, JSON.stringify(lists[listId]));
}

const dragEnd = (event) => {
    const {id} = event.target;

    event.target.remove();
    
    lists[from] = lists[from].filter((item) => {
        if(item.id !== id) {
            return item;
        } else {
            createElement(to, item);
        }
    });
    saveList(from, lists[from]);
}

const dragOver = (event) => {
    event.preventDefault();
    const {id} = event.target;
    if (Object.keys(lists).includes(id)) {
        to = id;
    } else {
        to = from;
    }
}

const dragStart = (event) => {
    from = event.target.parentElement.id;
}

const createElement = (type, todo) => {
    const list = document.querySelector(`#${type}`);
    const item = document.createElement('div');

    item.id = todo.id;
    item.className = 'item';
    item.draggable = true;
    item.innerText = todo.text;

    list.append(item);
    lists[type].push(todo);
    saveList(type, todo);
    
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
}

const createTodo = (event) => {
    event.preventDefault();
    
    const input = document.querySelector('input');
    const todo = {
        'id': uuidv4(),
        'text': input.value
    }
    
    createElement('todo', todo);
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
        myTodoList.forEach((item) => {
            createElement('todo', item);
            lists['todo'].push(item);
        })
    }
    if (myDoingList) {
        myDoingList.forEach((item) => {
            createElement('doing', item);
            lists['doing'].push(item);
        })
    }
    if (myDoneList) {
        myDoneList.forEach((item) => {
            createElement('done', item);
            lists['done'].push(item);
        })
    }
}
init();
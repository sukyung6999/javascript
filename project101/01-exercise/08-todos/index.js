// 무료 강의 👉 https://youtube.com/playlist?list=PLI33CnBTx2MZGD7zAQ810_B8dDU_E8gaq
// 이 아래 코드를 작성하세요.

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

/**
 * 1. 삭제 버튼을 추가
 * 2. 저장 되게끔
 * 3. 삭제 버튼 -> 저장된 데이터 업데이트
 */
const delItem = (event) => {

  const target = event.target.parentElement;
  // console.log(target.id);
  todos = todos.filter((todo) => todo.id !== parseInt(target.id));
  save();
  // console.log(todos.id, target.id);
  target.remove();
}

let todos = [];

const save = () => {
  localStorage.setItem('todos', JSON.stringify(todos))
}


const addItem = (todo) => {
  if (todo.text !== '') {
    const li = document.createElement('li');
    const button = document.createElement('button');
    const span = document.createElement('span');

    
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
  };
  todos.push(todo);
  addItem(todo);
  save();
  input.value = '';
}
const init = () => {
  const userTodos = JSON.parse(localStorage.getItem('todos'));
  // console.log(userTodos);

  if (userTodos) {
    userTodos.forEach((todo) => {
      addItem(todo);
    })
  
    todos = userTodos;
  }
}
init();

form.addEventListener('submit', handler);

// localStorage.setItem('hello', 'world');
// const myData = localStorage.getItem('hello');
// console.log(myData)
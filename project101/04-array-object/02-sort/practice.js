import products from "../products.js";

const button = document.querySelector('button');
const ul = document.querySelector('ul');
const asceButton = document.querySelector('.ascending');
const descButton = document.querySelector('.descending');

const removeItem = (item) => {
    const items = document.querySelectorAll(`${item}`);
    items.forEach((item) => item.remove());
}

const updateListAscend = () => {
    removeItem('li');

    const myProducts = products.data.sort((a,b) => a.price - b.price);
    myProducts.map((product) => createItem(product));
}

const updateListDescend = () => {
    removeItem('li');
    
    const myProducts = products.data.sort((a,b) => b.price - a.price);
    myProducts.map((product) => createItem(product));
}

const createItem = (product) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const div = document.createElement('div');

    li.id = product.id;
    h3.className = 'name';
    div.className = 'price';

    h3.innerText = product.name;
    div.innerText = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(product.price);

    li.append(h3, div);
    ul.append(li);
}

const updateList = () => {
    products.data.map((product) => {
        if (!document.getElementById(`${product.id}`)) {
            createItem(product);
        }
    })
}

button.addEventListener('click', updateList);
asceButton.addEventListener('click', updateListAscend);
descButton.addEventListener('click', updateListDescend);
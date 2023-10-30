import products  from "../products.js";

const ul = document.querySelector('ul');

let myProducts, selected = [];

const updateTotal = (price) => {
    const totalPrice = document.querySelector('.total-price');
    totalPrice.innerText = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(price);
}

const calculate = () => {
    const price = selected.reduce((acc, cur) => acc + cur.price, 0);
    updateTotal(price)
}

const addCart = (event) => {
    const {checked} = event.target;
    const {id} = event.target.parentElement;

    if (checked) {
        myProducts.forEach((product) => {
            if (product.id === parseInt(id)) selected.push(product);
        })
    } else {
        selected = selected.filter((product) => product.id !== parseInt(id));
    }
    calculate();
}

const createItem = (product) => {
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const div = document.createElement('div');
    const input = document.createElement('input');

    input.type = 'checkbox';
    input.addEventListener('change', addCart);

    li.id = product.id;
    h3.className = 'name';
    div.className = 'price';

    h3.innerText = product.name;
    div.innerText = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(product.price);

    li.append(input, h3, div);
    ul.append(li);
}

const listProducts = () => {
    if (products) {
        myProducts = products.data;
    }
    products.data.map((product) => {
        createItem(product);
    })
}
listProducts();


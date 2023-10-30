import products from '../products.js';

const button = document.querySelector('button');
const ul = document.querySelector('ul');
const select = document.querySelector('select');

let myProducts;

const removeItems = (item) => {
    const items = document.querySelectorAll(`${item}`);

    items.forEach((item) => {
        item.remove();
    })
}

const filterList = (event) => {
    // console.log(event);
    if (myProducts) {
        const {selectedIndex} = event.target.options;
        const {value} = event.target.option[selectedIndex];
        removeItems('li');

        const myProducts = products.data.filter((product) => {
            return product.category === value
        })
        myProducts.forEach((product) => {
            createItem(product);
        })
    } else {
        return event.target.value = '';
    }
}

const createItem = (product) => {
    if (isUpdated) {
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
    } else {
        select.value = ''
    }
}

const updateList = () => {
    if (products) {
        select.selectedIndex = 0;
        myProducts = products.data;
        myProducts.map((product) => {
            if (!document.getElementById(`${product.id}`)) {
                createItem(product);
            }
        })
    }
}

button.addEventListener('click', updateList);
select.addEventListener('change', filterList);
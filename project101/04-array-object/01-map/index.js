// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.
//  import products from '../products.json' assert { type : 'json'}
import products from '../products.js';

 console.log(products.data);

 const button = document.querySelector('button');

 const createItem = (product) => {
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    const h3 = document.createElement('h3');
    const div = document.createElement('div');

    const price = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    }).format(product.price);

    /**
     * 다른 방법도 있음! 
     * const krw = new Intl.NumberFormat('ko-KR', {
        style: 'currency',
        currency: 'KRW'
    });

    const price = krw.format(product.price);
     */

    li.id = product.id;
    h3.className = 'name';
    h3.innerText = product.name;
    div.className = 'price';
    div.innerText = price;

    li.append(h3, div)
    ul.append(li);
 }

 const importData = () => {
    products.data.map((product) => {
        if (!document.getElementById(product.id)){
            createItem(product);
        }
    })
 }

 button.addEventListener('click', importData);
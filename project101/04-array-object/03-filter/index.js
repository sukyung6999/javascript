// 💡 https://github.com/erumcoding/js-101-part-1
// ✅ /04-array-object 디렉토리에 해당 파일이 위치해야 합니다.
// ✅ 반드시 이전 강의를 먼저 수강한 다음 이어서 코드를 작성하세요.
import products from '../products.js';
const button = document.querySelector('button');
const select = document.querySelector('select');

let myProducts;

const selectCategory = (event) => {
  if (myProducts) {
    const {selectedIndex} = event.target.options;
    const {value} = event.target.options[selectedIndex];
    
    const filtered = myProducts.filter((product) => {
      return product.category === value
    })
    removeItems();
    filtered.forEach((product) => {
      createItem(product);
    })
  }
}

const removeItems = () => {
  const items = document.querySelectorAll('li');

  items.forEach((item) => {
    item.remove();
  });
};

const createItem = (product) => {
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const h3 = document.createElement('h3');
  const div = document.createElement('div');

  li.id = product.id;

  h3.className = 'name';
  h3.innerText = product.name;

  const price = new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(product.price);

  div.className = 'price';
  div.innerText = price;

  li.append(h3, div);
  ul.append(li);
};

const importData = () => {
  if (products) {
    select.selectedIndex = 0;
    myProducts = products.data;
    myProducts.map((product) => {
      if (!document.getElementById(product.id)) {
        createItem(product);
      }
    });
  }
};

button.addEventListener('click', importData);
select.addEventListener('change', selectCategory)
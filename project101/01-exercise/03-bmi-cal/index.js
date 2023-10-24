// 💡 https://github.com/erumcoding/js-101-part-1
// 👉 이 아래 코드를 작성하세요.

const form = document.querySelector('form');

const display = (bmi) => {
    const result = document.querySelector('.result');
    let group;

    if (bmi >= 30.0) {
        group ='중증도비만'
    } else if (bmi >= 25.0) {
        group = '경도비만'
    } else if (bmi > 23.0) {
        group = '과체중'
    } else if (bmi > 18.5) {
        group = '정상'
    } else {
        group = '저체중'
    }

    result.innerText = `${bmi} - ${group}`
}

const calculate = (weight, height) => {
    return (weight / (height * height)).toFixed(1);
}

const formHandler = (event) => {
    event.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');

    if (heightInput.value !== '' && weightInput.value !== '' ) {
        const weight = weightInput.value;
        const height = heightInput.value / 100;
        const bmi = calculate(weight, height);
        console.log(bmi);
        display(bmi);

        weightInput.value = '';
        heightInput.value = ''
    };
}

form.addEventListener('submit', formHandler);


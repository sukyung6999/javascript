const form = document.querySelector('form');

const display = (bmi) => {
    const result = document.querySelector('.result');
    let group;

    if (bmi > 25.00) {
        group = '비만'
    } else if (bmi > 23.00) {
        group = '과체중'
    } else if (bmi > 18.5) {
        group = '정상'
    } else {
        group = '저체중'
    }

    result.innerText = `${group} - ${bmi}`
}

const calculate = (height, weight) => {
    return (weight / (height * height)).toFixed(2);
}

const formHandler = (event) => {
    event.preventDefault();

    const heightInput = document.querySelector('#height');
    const weightInput = document.querySelector('#weight');

    if (heightInput !== '' && weightInput !== '') {
        const height = heightInput.value / 100;
        const weight = weightInput.value;
        const bmi = calculate(height, weight);
    
        display(bmi);
    
        heightInput = '';
        weightInput = '';
    }
}

form.addEventListener('submit', formHandler);
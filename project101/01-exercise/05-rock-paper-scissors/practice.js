const buttons = document.querySelectorAll('button');
const computerChoice = document.querySelector('.computer-choice');
const userChoice = document.querySelector('.you-choice');
const result = document.querySelector('.result');

const show = (user, computer, message) => {
    computerChoice.innerText = computer;
    userChoice.innerText = user;
    result.innerText = `${message}`;
}

const game = (user, computer) => {
    let message;

    if (user === computer) {
        message = '무승부';
    } else {
        switch (user+computer) {
            case '가위보':
            case '바위가위':
            case '보바위':
                message = '사용자 승리!';
                break;
            case '가위바위':
            case '바위보':
            case '보가위':
                message = '컴퓨터 승리!';
                break;
        }
    }

    show(user, computer, message);
}

const options = ['가위', '바위', '보'];
const random = () => {
    const idx = Math.floor( Math.random() * 3 );

    return options[idx];
}

const play = (event) => {
    const user = event.target.innerText;
    const computer = random();

    game(user, computer);
}

buttons.forEach((button) => {
    button.addEventListener('click', play);
})
/**
 * Loops
 * 
 * 1) for
 * 2) while
 */
for (let i = 0; i < 10; i++) {
    console.log(i);
} 
console.log('-----');
for (let i = 10; i > 0; i--) {
    console.log(i);
}
console.log('-----');
for(let i = 0; i < 3; i++) {
    for(let j = 3; j > 0; j--) {
        console.log(i,j);
    }
}

//  *를 사용해서 6X6의 정사각형을 출력해라
let square = '';
let side = 6;
// 내가 짠 코드
// for (let i = 0; i < 36; i++) {
//     square += '*'
//     if (i % 6 === 5) square += '\n';
// }
for(let i = 0; i < side; i++){
    for(let j = 0; j < side; j++) {
        square += '*';
    }
    square += '\n';
}
console.log(square);
console.log('ㅡㅡㅡㅡㅡㅡ');
/**
 * for...in
 */
const yujin = {
    name: '안유진',
    year: 2003,
    group: 'ive'
};
for(let key in yujin) {
    console.log(key);
}
console.log('ㅡㅡㅡㅡㅡㅡ');

const iveMembersArray = ['안유진', '장원영', '레이', '리즈', '이서', '가을'];
for(let key in iveMembersArray) {
    console.log(key);
    console.log(`${key}: ${iveMembersArray[key]}`)
}

/**
 * for...of
 */
for(let value of iveMembersArray) {
    console.log(value);
}

/**
 * while
 */
let number = 0;

while(number < 10){
    number++;
}
console.log(number);

/**
 * do...while
 * (안 쓰는걸 추천)
 */
number = 0;

do {
    number++;
} while (number < 10);
console.log(number);
console.log('ㅡㅡㅡㅡㅡㅡ');

/**
 * break : loop 을 깨뜨린다
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}
console.log('ㅡㅡㅡㅡㅡㅡ');

number = 0;
while(number < 10) {
    if (number === 5) break;
    number++;
    console.log(number);
}
console.log('ㅡㅡㅡㅡㅡㅡ');

/**
 * continue : 현재의 loop만 스킵을 하게 됨
 */
for (let i = 0; i < 10; i++) {
    if (i === 5) continue;
    console.log(i);
}
console.log('ㅡㅡㅡㅡㅡㅡ');

number = 0;
while(number < 10) {
    number++;
    if(number === 5) continue;
    console.log(number);
}
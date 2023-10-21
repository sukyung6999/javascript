/**
 * Array Functions
 */
let iveMembers = ['안유진','장원영','이서','리즈','레이','가을'];
console.log(iveMembers);
console.log('ㅡㅡㅡㅡㅡ');

// push()
console.log(iveMembers.push('코드팩토리')); // 7
console.log(iveMembers);
console.log('ㅡㅡㅡㅡㅡ');
 
// pop()
console.log(iveMembers.pop()); // 마지막 값 삭제
console.log(iveMembers);
console.log('ㅡㅡㅡㅡㅡ');

// shift()
console.log(iveMembers.shift());// 첫 번쨰 값 삭제
console.log(iveMembers);
console.log('ㅡㅡㅡㅡㅡ');

// unshift()
console.log(iveMembers.unshift('안유진'));// 첫 번쨰 값 추가
console.log(iveMembers);
console.log('ㅡㅡㅡㅡㅡ');

// splice()
console.log(iveMembers.splice(0,3)); // 기존 배열을 건드림
console.log(iveMembers);
console.log('ㅡㅡㅡㅡㅡ');

iveMembers = ['안유진','장원영','이서','리즈','레이','가을'];

// concat()
console.log(iveMembers.concat('코드팩토리')); // 새로운 배열을 만듬
console.log(iveMembers);

// slice()
console.log(iveMembers.slice(0, 3)); // 새로운 배열을 만듬
console.log(iveMembers);

// spread operator
let iveMembers2 = [
    ...iveMembers,

]
console.log(iveMembers2);

let iveMembers3 = [
    iveMembers
]
console.log(iveMembers3);

let iveMembers4 = iveMembers;
console.log(iveMembers4);
console.log(iveMembers4 === iveMembers);

console.log([
    ...iveMembers
] === iveMembers);

// join() : 모든 값을 하나의 string으로 합칠 수 있음
console.log(iveMembers.join());
console.log(iveMembers.join('/'));
console.log(iveMembers.join(', '));

// sort()
// 오름차순 
iveMembers.sort();
console.log(iveMembers);

// reverse()
// 내림차순
console.log(iveMembers.reverse());

let numbers = [1,9,5,10,6,2]
console.log(numbers);

// a, b를 비교했을 때
// 1) compareFunction(a,b)가 0 보다 큰 값을 반환하면 => a를 b뒤에 정렬
// 2) compareFunction(a,b)가 0 보다 작은 값을 반환하면 => a를 b보다 먼저 정렬
// 2) compareFunction(a,b)가 0을 반환하면 => 그대로 둠
console.log(numbers.sort((a,b) => {
    return a > b ? 1 : -1;
}));

numbers.sort((a,b) => {
    return a > b ? -1 : 1
});
console.log(numbers);

// map()
console.log(iveMembers.map((x) => x));
console.log(iveMembers.map((x) => `아이브: ${x}`));

console.log(iveMembers.map((x) => {
    if (x === '안유진') {
        return `아이브: ${x}`
    } else {
        return x;
    }
}));

console.log(iveMembers);

// filter()
numbers = [1,8,7,6,3];

console.log(numbers.filter((x) => true));
console.log(numbers.filter((x) => false));

console.log(numbers.filter((x) => x % 2 === 0));

// find()
console.log(numbers.find((x) => x % 2 === 0));

// findIndex()
console.log(numbers.findIndex((x) => x % 2 === 0));

// reduce()
console.log(numbers.reduce(((p, n) => p + n,0)));
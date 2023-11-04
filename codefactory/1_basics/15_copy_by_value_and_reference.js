/**
 * copy by value 값에 의한 전달
 * copy by reference 참조에 의한 전달
 * 
 * 1) 기본적으로 모든 primitive 값은 copy by value다.
 * 2) 객체는 copy by reference다.
 */
let original = '안녕하세요'
let clone = original;

console.log(original);
console.log(clone);

clone += ' 안유진입니다';
console.log(original);
console.log(clone);

let originalObj = {
    name: '안유진',
    group: '아이브'
};
let cloneObj = originalObj;
console.log(originalObj, cloneObj);

originalObj['group'] = '코드팩토리';
console.log(originalObj, cloneObj);

console.log(originalObj === cloneObj); // true
console.log(original === clone);

originalObj = {
    name: '이수경',
    group: '신림'
};
cloneObj = {
    name: '이수경',
    group: '신림'
};

console.log(originalObj === cloneObj); // false

const yuJin1 = {
    name: '안유진',
    group: '아이브'
}
const yuJin2 = yuJin1;
const yuJin3 = {
    name: '안유진',
    group: '아이브'
};

console.log(yuJin1 === yuJin2); // true
console.log(yuJin1 === yuJin3); // false
console.log(yuJin2 === yuJin3); // false

/**
 * Spread Operator => copy by value임
 */
const yuJin4 = {
    ...yuJin3
};
console.log(yuJin4);
console.log(yuJin3 === yuJin4); 

const yuJin5 = {
    year: 2003,
    ...yuJin3
};
console.log(yuJin5);

const yuJin6 = {
    name: '코드팩토리',
    ...yuJin3
};
console.log(yuJin6); // name은 안유진임 순서가 중요
const yuJin7 = {
    ...yuJin3,
    name: '코드팩토리',
};
console.log(yuJin7); // name은 코드팩토리임 순서가 중요
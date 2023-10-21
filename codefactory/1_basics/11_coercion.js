/**
 * 타입 변환
 * Type Conversion
 * 
 * 1) 명시적
 * 2) 암묵적
 */

let age = 27;

// 명시적
let stringAge = age.toString();
console.log(typeof stringAge, stringAge);

// 암묵적
let test = age + '';
console.log(typeof test, test);

console.log('98' + 2); // 982
console.log('98' * 2); // 196
console.log('98' - 2); // 92

/**
 * 명시적 변환 몇가지 더 배우기
 */
console.log(typeof (99).toString());
console.log(typeof (true).toString());
console.log(typeof (Infinity).toString());

// 숫자 타입으로 변환
console.log(typeof parseInt('0'), parseInt('0.99'));
console.log(typeof parseFloat('0.99'), parseFloat('0.99'))
console.log(typeof +'1', '1');
console.log('ㅡㅡㅡㅡㅡㅡㅡㅡ');

/**
 * Boolean 타입으로 변환
 */
console.log(!!'x');
console.log(!!'');
console.log(!!0);
console.log(!!'0');
console.log(!!false);
console.log(!!'false');
console.log(!!undefined); // false
console.log(!!null); // false

console.log(!!{}); // true
console.log(!![]); // true

/**
 * 1) 아무 글자도 없는 경우 String
 * 2) 값이 없는 경우 
 * 3) 0
 * 
 * 모두 false를 반환한다.
 */
/**
 * Immutable Object
 */
const yuJin = {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year
    },
    set age(age) {
        this.year = new Date().getFullYear() - age
    }
}
console.log(yuJin);

/**
 * Extensible
 * 
 * - Object.isExtensible(객체) : 프로퍼티 추가 가능(확장 가능) 여부
 * - Object.preventExtensions(객체) : 프로퍼티 추가(확장) X 안됨!! , 삭제는 가능
*/
console.log(Object.isExtensible(yuJin));

yuJin['position'] = 'vocal';

console.log(yuJin);

Object.preventExtensions(yuJin);

console.log(Object.isExtensible(yuJin));

yuJin['groupName'] = 'ive';

console.log(yuJin);

delete yuJin['position'];

console.log(yuJin);
console.log('ㅡㅡㅡㅡㅡㅡㅡ');

/**
 * Seal => configurable 어트리뷰트를 false로 만드는것과 같음
 * 
 * Object.isSealed(객체) : 봉인 여부
 * Object.seal(객체) : 봉인
 */
const yuJin2 = {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year
    },
    set age(age) {
        this.year = new Date().getFullYear() - age
    }
}
console.log(yuJin2);

console.log(Object.isSealed(yuJin2));

Object.seal(yuJin2);

console.log(Object.isSealed(yuJin2));

yuJin2.groupName = '아이브';
console.log(yuJin2);

delete yuJin2.name;
console.log(yuJin2);

Object.defineProperty(yuJin2, 'name', {
    value: '코드팩토리'
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log(yuJin2);
console.log('ㅡㅡㅡㅡㅡㅡㅡ');

Object.defineProperty(yuJin2, 'name', {
    writable: false
});
console.log(Object.getOwnPropertyDescriptor(yuJin2, 'name'));
console.log(yuJin2);

/**
 * Freezed
 * 읽기 외에 모든 기능 불가능하게 한다.
 * 
 * Object.isFrozen(객체)
 * Object.freeze(객체)
 */
const yuJin3 = {
    name: '안유진',
    year: 2003,
    get age() {
        return new Date().getFullYear() - this.year
    },
    set age(age) {
        this.year = new Date().getFullYear() - age
    }
}
console.log(Object.isFrozen(yuJin3));

Object.freeze(yuJin3);

console.log(Object.isFrozen(yuJin3));

console.log('ㅡㅡㅡㅡㅡㅡㅡ');

yuJin3.groupName = '아이브';
console.log(yuJin3);

console.log('ㅡㅡㅡㅡㅡㅡㅡ');

delete yuJin3.name;
console.log(yuJin3);

// Object.defineProperty(yuJin3, 'name', {
//     value: '코드 팩토리'
// })
console.log(Object.getOwnPropertyDescriptor(yuJin3, 'name'));
console.log(yuJin3);

const yuJin4 = {
    name: '안유진',
    year: 2003,
    wonYoung: {
        name: '장원영',
        year: 2004
    }
}

Object.freeze(yuJin4);

console.log(Object.isFrozen(yuJin4)); // false
console.log(Object.isFrozen(yuJin4['wonYoung'])); // false

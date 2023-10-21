/**
 * Inheritance
 */
 class IdolModel {
    name;
    year;

    constructor(name, year) {
        this.name = name;
        this.year = year;
    }
 }

 class FemaleIdolModel extends IdolModel {
    dance() {
        return '여자 아이돌이 춤을 춥니다.'
    }
 }

 class MaleIdolModel extends IdolModel {
    sing() {
        return '남자 아이돌이 노래를 부릅니다.'
    }
 }

 const yuJin = new FemaleIdolModel('안유진', 2003);
 console.log(yuJin);

 const jimin = new MaleIdolModel('지민', 1995);
 console.log(jimin)

console.log(yuJin.dance());
console.log(yuJin.name);

console.log(jimin.sing());
console.log(jimin.year);

const cf = new IdolModel('수경', 1996);
console.log(cf);
console.log(cf.name);
// console.log(cf.dance());

console.log(yuJin instanceof IdolModel);
console.log(yuJin instanceof FemaleIdolModel);
console.log(yuJin instanceof MaleIdolModel);
console.log('------');
console.log(jimin instanceof IdolModel);
console.log(jimin instanceof FemaleIdolModel);
console.log(jimin instanceof MaleIdolModel);
console.log('------');
console.log(cf instanceof IdolModel);
console.log(cf instanceof FemaleIdolModel);
console.log(cf instanceof MaleIdolModel);

'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);
// 1. New obj is created
// 2. function is called and this = {}
// 3. {} linked to prototype
// 4. function automatically returns {}


/* Prototype */
Person.prototype.calcAge = function () {
    console.log(2037 - this.birthYear);
}
jonas.calcAge();
console.log(jonas.__proto__);

let s = "abcde";
for(let x of s){
    console.log(x);
}

const obj = {
    name: 'Jonas',
    age: 30
};


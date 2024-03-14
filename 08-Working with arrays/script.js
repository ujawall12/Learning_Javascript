'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////


/* Slice method is used to extract a part of an array and returns it as a new array */

let arr = ['a' , 'b' , 'c' , 'd' , 'e'];

console.log(arr.slice(2,4));

/* Splice method works similarly to slice method but it also changes the original array and returns the removed elements as an array. It also takes start and end parameter */

// console.log(arr.splice(2,1)); // Returns ['c']
console.log(arr);

/* Reverse method reverses the original array . It mutates the original array */
// console.log(arr.reverse());
console.log(arr);

/* Concat method is used to merge two or more arrays */
const arr2 = ['j', 'i', 'h', 'g', 'f'];
const newarr = arr.concat(arr2);
console.log(newarr);

/* Join method is used to join all the elements of an array into a string */
console.log(newarr.join(' - '));

/* At method is used to access the element at the specified index
* We can also use negative index which will start the array from the end
*/
console.log(newarr.at(0));
console.log(arr.at(-1)); // Last element


/*
* Looping Arrays: forEach
* forEach is a higher order functions that takes a callback function which defines what should be done with each element. And the parameter in the call back function is the element of the array in the ith iteration.
* It can take three parameters. The first is the element itself and the second is the index of the element and the third is the array itself.
* We cannot use break and continue keywords in the forEach loop.
 */

const accountMovements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((element) => {
  if (element > 0) {
    console.log(`You deposited ${element}`);
  } else {
    console.log(`You withdrew ${Math.abs(element)}`);
  }
});

/*
* forEach in maps and sets.
* This also takes a callback function.
* There are three parameters in the callback function. The first is the value of the element and the second is the key of the element and the third is the map itself.
 */

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map) => {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
currenciesUnique.forEach((value, _, map) => { // In sets there is no key. _ is used to ignore the key. _ is not a syntax, we can use anything. Its just a convention.
  console.log(`${value}: ${value}`);
});







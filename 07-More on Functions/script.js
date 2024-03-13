'use strict';
/* How passing arguments works Value v/s Reference */

const flight = 'LH234';
const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 247878,
};

const checkIn = function (flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = 'Mr. ' + passenger.name; // The name parameter of the actual object will be changed.
    passenger.passport === 247878 ? console.log('Checked in') : console.log('Wrong passport!');
}
checkIn(flight , jonas)
console.log(flight);
console.log(jonas);

/* First class functions and higher order functions
* This means that functions are simply values
* Functions are just another "type of object"
*
* Higher order functions are functions that take other functions as arguments or return a function as a result, or both.
* eg addEventListener('click', handler)
*/

//first class function
const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase(); // replace all the spaces in the string with nothing
}

//another first class function
const upperFirstWord = function (str) {
    const [first, ...others] = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

//Higher Order function
const transformer = function (str, fn) {
    console.log(`Original string: ${str}`);
    console.log(`Transformed string: ${fn(str)}`);
}

transformer('javaScript is the best !', upperFirstWord);
transformer('javaScript is the best !', oneWord);

/* Functions returning functions */

const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`);
    }
}

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

// Writing the above in the form of arrow functions
const greetArrow = (greeting) => (name) => console.log(`${greeting} ${name}`);
greetArrow(`Hey from arrow`)('Jonas');

/* The call and apply methods */

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
    },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: [],
};

const book = lufthansa.book;

// book(23, 'Sarah Williams'); // This wont work as the this is a normal function call and not a method call so the this keyword for book is undefined.

// We can use a call method to fix this. The call method arguments are the name of the object to which we want the this to be and the keyword and the arguments passed to the function.
book.call(eurowings, 23, 'Sarah Williams');
book.call(lufthansa, 239, 'Mary Cooper');

// We can also use the apply method to pass an array of arguments. The difference is that apply takes an array of arguments rather than individual arguments.
const flightData = [583, 'George Cooper'];
book.apply(eurowings, flightData); // But apply is not used a lot as we can do the same using call method through spread operator(...flightData).

// We can also use bind method. The bind method returns a new function with the this keyword set to the provided value.
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
bookEW(23, 'Steven Williams');
bookLH(239, 'Mary Cooper');

// We can also further use the bind function to set the this keyword to the object we want to set the this keyword to. This is also known as partial application.
const bookEW23 = book.bind(eurowings, 23); // This will set the this keyword to eurowings and the arguments to 23. So you will only have to pass the name of the person in the argument, the flightNum will be set automatically to 23.
bookEW23('Jonas Schmedtmann');

//With Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
    console.log(this);
    this.planes++;
    console.log(this.planes);
};
const buy = lufthansa.buyPlane.bind(lufthansa);
document.querySelector('.buy').addEventListener('click' , buy);

// Partial application example: presetting parameters
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

/* Immediately Invoked Function Expression (IIFE)
* The IIFE is a function that runs as soon as it is called. It is used to avoid polluting the global namespace.
* Used when we want q function to run only once.
* To use them, we need to wrap them in parenthesis.()
* */

const runOnce = function () {
    console.log('This will never run again');
};
runOnce();

(function () {
    console.log('This will never run again');
})();

(function (name) {
    console.log(`This will never run again ${name}`);
})
('Jonas');

/* Closures are functions that remember their outer variables. They are used to create private variables.
* Any function always has access to the variable environment of the execution context in which it was created.
 */

const secureBooking = function () {
    let passengerCount = 0;
    return function () {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

// Destructuring objects
const { name, openingHours, categories } = restaurant;
console.log( name ,   openingHours , categories);

// Giving names to the variables
const { name: restaurantName, openingHours: hours, categories: tags } = restaurant;
console.log("Variables with chaged names: "+restaurantName, hours, tags);

// Giving default values to the variables
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log("Mutating variables: " + a, b);

//Nested Objects
const { fri: { open: o, close: c } } = openingHours;
console.log("Nested Objects: " + o, c);


/* Spread Operator in Iterables: arrays, string, maps, sets. NOT objects (...)
*  Takes the value of array and writes them individually.
*  Whenever we need the elements of an array individually then we use the spread operator.
*  To create shallow copies of array.
*  */

const arr = [7,8,9];
const badNewArr = [1,2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1,2, ...arr];
console.log(newArr);
console.log(...newArr);

//Spread operator on strings
const str = 'Jonas';
const letters = [...str, ' ', 'S.'];
console.log(letters);
console.log(...letters);

//Spread operator on objects to create shallow copy
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

/* Short Circuiting (&& and ||)
* These operators can use any data type, return any data type, short circuiting is used to stop the evaluation of the remaining part of the code.
* || -> if the first value is truthy, it returns the first value. If the first value is falsy, it returns the second value.
* && -> if the first value is falsy, it returns the first value. If the first value is truthy, it returns the second value.
* */
console.log('---- OR ----');

console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);
console.log(0 || '' || 'Hello' || 23 || null);

const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);

console.log('---- AND ----');

console.log(0 && 'Jonas');
console.log(7 && 'Jonas');

/* Nullish Coalescing Operator (??)
* This operator returns the first value that is not null or undefined.
* */

console.log('---- Nullish Coalescing Operator ----');

const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

/* Logical Assignment Operators
* These operators assign values to a variable based on a condition.
* */

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest2.numGuests = rest2.numGuests ?? 11;
rest2.numGuests ??= 11; //
console.log("The number of guests in rest2: "+rest2.numGuests);

rest2.owner &&= 'ANONYMOUS';
console.log("Owner of restaurant 2 is: "+rest2.owner);


// Coding Challenge #1

/*
We're building a football betting app (soccer for my American friends 😅)!

Suppose we get data from a web service about a certain game (below). In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
 */

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1
const [players1 , players2] = game.players;
console.log(players1, players2);

// 2
const [gk, ...fieldPlayers] = players1;
console.log("The goalkeeper and field players are : "+gk, fieldPlayers);

// 3
const allPlayers = [...players1 , ...players2];
console.log("The allPlayers array is : " + allPlayers);

// 4
const players1Final = [...players1, 'Thiago', 'Coutinho' , 'Perisic'];
console.log("The final player list with substitutes is : "+players1Final);
// 5
const {odds: {team1, x: draw , team2}} = game;
console.log(team1, draw, team2);

/* for of loop */
const hotelMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
for(const item of hotelMenu) console.log(item);
for(const item of hotelMenu.entries()) console.log(item);

/* Strings in JS
* Strings are immutable in JS.
* */

const airline = 'TAP Air Portugal Portugal';
const plane = 'A320';
// const plane = 'A320neo';
// const plane = 'A320neo';
console.log(`Length of the string is : ${airline.length}`);

console.log(`The first occurence of r in the string is : ${airline.indexOf('r')}`);
console.log(`The last occurence of r in the string is : ${airline.lastIndexOf('r')}`);
console.log(`The occurence of entire word Portugal is : ${airline.indexOf('Portugal')}`);

console.log(airline.slice()); // Returns a new string. Doesnt modify the original string.
console.log(`Slicing with both start and end : ${airline.slice(4, 7)}`); // 7 is exclusive. Start is inclusive. So the length is 3 (7-4).
console.log(`Slicing with negative start : ${airline.slice(-3)}`); // The negative index slices from the end of the string.
console.log(`Slicing with negative end : ${airline.slice(4, -1)}`); // The negative index slices from the end of the string.

console.log(`Changing the string to lowecase and uppercase : ${airline.toLowerCase()} ${airline.toUpperCase()}`);

console.log(`Trim method is used to remove white spaces from the start and end of the string : ${airline.trim()}`);

console.log(`Replace method is used to replace the string : ${airline.replace('Portugal', 'United Kingdom')}`);
console.log(`Replace all occurence of the string : ${airline.replaceAll('Portugal', 'United Kingdom')}`);

console.log(`Includes method is used to check if the string contains the substring : ${airline.includes('Portugal')}`);

console.log(`Starts with method is used to check if the string starts with the substring : ${airline.startsWith('TAP')}`);
console.log(`Ends with method is  used to check if the string ends with the substring : ${airline.endsWith('Portugal')}`);

console.log(`Split method is used to split the string into an array : ${airline.split(' ')}`);
console.log(`Join method is used to join the array into a string : ${airline.split('').join(' ')}`); // Combination of split and join is very useful in real life.

console.log(`Padding method is used to pad the string with spaces : ${airline.padStart(80, '+')}`);  // The first parameter is the length of the string. The second parameter is the string to be padded. Pads the string until the length of the string is 80. The string is padded on the left side.
console.log(`Pad end method is used to pad the string with spaces : ${airline.padEnd(80, '+')}`); // Pads the string until the length of the string is 80. The string is padded on the right side.

console.log(`Pad method can be used to hide the strings like the numbers in credit cards : ${airline.slice(-4).padStart(airline.length, '*')}`); // Slices the last 4 characters of the string. Pads the string with * until the length of the string is 80. The string is padded on the right side.

console.log(`Repeat method is used to repeat the string : ${'TAP'.repeat(5)}`); // Repeats the string 5 times.

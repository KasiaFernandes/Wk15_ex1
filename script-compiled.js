'use strict';

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var sayHello = function sayHello() {
  return alert('Hello world!');
};
sayHello();

// Exercise 15.1.1

var hello = 'Hello';
var world = 'world';
var helloWorld = hello + ' ' + world;
console.log(helloWorld);

// Exercise 15.1.2

var multiply = function multiply() {
  var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
  var b = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return a * b;
};

console.log(multiply(2, 3));

// Exercise 15.1.3

function average() {
  var total = 0;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  args.forEach(function (x) {
    return total += x;
  });
  return total / args.length;
}

console.log(average(1, 2, 3, 4, 5));

/*
const average = (...args) => {
  const sum = args.reduce((total, amount) => {
    total += amount
    return total + amount;
  }, 0);
  return sum / args.length;
}

const average = (...args) => args.reduce((total, amount) => total + amount, 0) / args.length;
*/

// Exercise 15.1.4

var grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
var first = grades[0],
    second = grades[1],
    rest = grades.slice(2);


function average() {
  var total = 0;

  for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

  args.forEach(function (x) {
    return total += x;
  });
  return total / args.length;
}

console.log(average.apply(undefined, [first, second].concat(_toConsumableArray(rest))));

// Exercise 15.1.5

var strangeData = [1, 4, 'Iwona', false, 'Nowak'];
var firstname = strangeData[2],
    lastname = strangeData[4];


console.log(firstname, lastname);
console.log(firstname + ' ' + lastname);

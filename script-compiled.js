'use strict';

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
  return console.log(a * b);
};

// Exercise 15.1.3

var average = function average() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return args.reduce((n, function (sum) {
    return n + sum;
  }) / arr.length);
};

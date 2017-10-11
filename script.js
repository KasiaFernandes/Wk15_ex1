const sayHello = () => alert('Hello world!');
sayHello();

// Exercise 15.1.1

const hello = `Hello`
const world = `world`
const helloWorld = `${hello} ${world}`
console.log(helloWorld)


// Exercise 15.1.2

const multiply = (a = 1, b = 1) => console.log(a * b);

// Exercise 15.1.3

function average(...args) {
  var total = 0;
  Array.from(args).forEach(x => total += x)
  return total/Array.from(args).length
}

console.log(average(1, 2, 3, 4, 5))

/*
const average = (...args) => Array.from(args).reduce((total, amount) => {
    total += amount
    return total/ args.length
  });
*/


// Exercise 15.1.5

const strangeData = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = strangeData

console.log(firstname, lastname);
console.log(`${firstname} ${lastname}`)

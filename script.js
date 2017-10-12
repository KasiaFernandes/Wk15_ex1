const sayHello = () => alert('Hello world!');
sayHello();

// Exercise 15.1.1

const hello = `Hello`
const world = `world`
const helloWorld = `${hello} ${world}`
console.log(helloWorld)


// Exercise 15.1.2

const multiply = (a = 1, b = 1) => (a * b);

console.log(multiply(2, 3));

// Exercise 15.1.3

function average(...args) {
  var total = 0;
  args.forEach(x => total += x);
  return total / args.length;
}

console.log(average(1, 2, 3, 4, 5))

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

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1]
const [first, second, ...rest] = grades

function average(...args) {
  var total = 0;
  args.forEach(x => total += x);
  return total/args.length;
}

console.log(average(first, second, ...rest));


// Exercise 15.1.5

const strangeData = [1, 4, 'Iwona', false, 'Nowak'];
const [, , firstname, , lastname] = strangeData

console.log(firstname, lastname);
console.log(`${firstname} ${lastname}`)

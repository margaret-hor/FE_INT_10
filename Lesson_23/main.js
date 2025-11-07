//* task 1

// declaration
// function funcName(par) {some code}

// expression
// const name = function(par) {some code} ---- or ---- const name = function funcName(par) {some code}

// arrow func
// const name = (par) => some code;

// IIFE
// (function(par) {some code})(arg);

// constructor
// const name = new Function(par, some code);

//* task 2
function countArgs(...args) {
  console.log(`Number of arguments: ${args.length}`);
}

//* task 3
const compare = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    return 'Both arguments must be numbers!';
  } else {
    return Math.sign(a - b);
  }
};

//* task 4
const makeNumber = (a, b, c) => (a * 100) + (b * 10) + c;

//* task 5
const calculateArea = (length, width = length) => length * width;
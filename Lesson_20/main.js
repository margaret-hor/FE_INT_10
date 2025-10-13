// task 1
const initialNum = 1;
const initialString = "45";
const initialBool = false;

const numToString = initialNum + "";
const numToBool = !!initialNum;

const stringToNum = +initialString;
const stringToBool = !!initialString;

const boolToNum = +initialBool;
const boolToString = initialBool + "";

console.log(`Number to String: "${numToString}" (${typeof numToString})`);
console.log(`Number to Boolean: "${numToBool}" (${typeof numToBool})`);

console.log(`String to Number: "${stringToNum}" (${typeof stringToNum})`);
console.log(`String to Boolean: "${stringToBool}" (${typeof stringToBool})`);

console.log(`Boolean to Number: "${boolToNum}" (${typeof boolToNum})`);
console.log(`Boolean to String: "${boolToString}" (${typeof boolToString})`);

// task 2
let a = +prompt("First number?", 1);
let b = +prompt("Second number?", 2);

alert(a + b); // 3

// task 3
// "" + 1 + 0   ---   '10'
// "" - 1 + 0   ---   -1
// true + false   ---   1
// 6 / "3"   ---   2
// "2" * "3"   ---   6
// 4 + 5 + "px"   ---   '9px'
// "$" + 4 + 5   ---   '$45'
// "4" - 2   ---   2
// "4px" - 2   ---   NaN
// "  -9  " + 5   ---   '  -9  5'
// "  -9  " - 5   ---   -14
// null + 1   ---   1
// undefined + 1   ---   NaN
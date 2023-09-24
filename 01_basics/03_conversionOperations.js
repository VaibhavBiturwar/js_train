let score = 3;

console.log(typeof score);
// console.log(typeof(score));// correct | used as a function

// number conversion
let scoreInNum = Number(score);
console.log(typeof scoreInNum);

score = "33A"; // should not be converted to number since it contains a character in it.
console.log(typeof score); // string
scoreInNum = Number(score); // value is NnN
console.table([typeof scoreInNum, scoreInNum]); // number

// !!!!!
// On converting a string to a number,
// check if the value is NaN(Not a number) before making any further calculations.
// !!!!!

const z = 33;
console.table([Number(z), String(z), Boolean(z)]);

let val = 3;
let negVal = -val;
console.log({ negVal });

/*
Basic Operations
2+2 => 4
2-2 => 0
2*2 => 4
2**3 => 8
2/3 => 0.66
2%3 => 2
*/

// Strings
const str1 = "Vaibhav";
const str2 = " Biturwar";
const str3 = str1 + str2;
console.log({ str3 });

console.log("1" + 2 + 2); // 122 string
// If first item is string then its concatenated

console.log(1 + 2 + "3"); // 33 string
// If first item is number then its computed
// and then concatenated with string
//  1+2 = 3 + "3"

// MISC
console.log(+true); // 1
console.log(+""); // 0

let num1, num2, num3;
num1 = num2 = num3 = 3 + 3;
console.table([{ num1 }, { num2 }, { num3 }]);

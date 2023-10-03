// Strings
const str = "Lorem Ipsum"

// String interpolation
// console.log(`This is string interpolation ${str}`);


const str2 = '0123456789';
// SUBSTRING
// console.log(str2.substring(0,3))// 0=> inclusive | 3=> exclusive | -ve values overridden with 0 

// SLICE
// console.log(str2.slice(0,4)); 
console.log(str2.slice(5,-2)); // supports -ve values

// Other Methods
/*
trim();
trimStart();
trimEnd();
replace();
splice(); ****
*/


const str3 = 'A non-negative integer specifying a limit on the number of substrings to be included in the array';
console.log(str3.split(" ", 3));
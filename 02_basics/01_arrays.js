// Arrays
const arr1 = [0, 1, true, "asd", "a", { flag: 0 }];

// SHALLOW COPY in ARRAY
const arr2 = arr1;
arr2[5].flag = 2;
// console.log(arr1); // flag value set to 2
// console.log(arr2); // flag value set to 2

// METHODS
// .push(val);
// .pop();
// .unshift(9); // push from start | heavy
// .shift();  // pop from start
// .includes(2); // check if includes (boolean);
// .index(3); index|-1 if not exists
// .join(); string with values separated with ","

// SLICE
const arr3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const ta1 = arr3.slice(1, 4); // non-destructive | (inclusive, exclusive)    
console.log(ta1); // [ 1, 2, 3 ]

const ta2 = arr3.splice(1, 4); // destructive | (inclusive, inclusive)
console.log(ta2); //  [ 1, 2, 3, 4 ]
console.log(arr3); // [ 0, 5, 6, 7, 8, 9 ]  | original array gets effected



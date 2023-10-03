const arr1 = [1, 2, 3, 4, 5];
const arr2 = ["1", "2", "3", "4", "5"];

// arr1.push(arr2);
// console.log(arr1); // [ 1, 2, 3, 4, 5, [ '1', '2', '3', '4', '5' ] ]

// const arr3 = arr1.concat(arr2);
// console.log(arr3); // [1, 2, 3, 4, 5, '1', '2', '3', '4', '5' ]

// SPREAD OPERATOR
// const arr4 = [...arr1, ...arr2];
// console.log(arr4); // same | // [1, 2, 3, 4, 5, '1', '2', '3', '4', '5' ]

// const multiDimArr = [1, 2, [3, 4], 5, [6, 7, [8, 9]]];
// const flatArr = multiDimArr.flat(Infinity);  // takes depth for recursion
// console.log(flatArr); // [1, 2, 3, 4, 5,6, 7, 8, 9]

// Array.isArray("123"); // false
// Array.from("123"); // [1,2,3]
// console.log(Array.from({ id: 111 })); // []
// Array.of(var1, var2, var3);

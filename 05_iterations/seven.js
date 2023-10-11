// Map
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const plusTen = numArr.map((val) => val + 10);
// console.table(plusTen);

// Method Chaining
// Multiple numbers by 5 and add 1 and find those  25<num<40
const result = numArr
  .map((val) => val * 5)
  .map((val) => val + 1)
  .filter((val) => val > 25 && val < 40);
// console.log(result);

// Reduce method
const initialVal = 5;
const sumOfNum = numArr.reduce((sum, val) => {
  console.log(`sum ${sum} | val ${val}`);
  return sum + val;
}, initialVal);
console.log({ sumOfNum });

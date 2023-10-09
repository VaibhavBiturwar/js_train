// Normal Functions
function sumOfTwo(num1, num2) {
  return ` sum of ${num1} and ${num2} is  ${num1 + num2}`;
}


// Default parameter
function sumDefault(num1 = 1, num2 = 2) {
  return ` sum of ${num1} and ${num2} is  ${num1 + num2}`;
}


// const sum = sumOfTwo(1, 2);
const sum = sumDefault(0, 4);
// console.log(sum);





// Rest Operator
function sumOfItems(...val) {
  //  get first and second value in separate variables, rest in the val array
  // function sumOfItems(val1, val2, ...val) {
  //     console.log(val1, val2,val);
  //
  return val.reduce((sum, item) => {
    return sum + item;
  });
}
console.log(sumOfItems(200, 239, 343, 35, 12));

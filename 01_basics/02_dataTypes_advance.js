// Data Types 
/*
1. Primitive (copy by value)
[String, Number, Boolean, null, undefined, Symbols]
*** value stored in stack

2. Non-Primitive (copy by reference)
[Array, Objects, Functions]
*** data stored in heap. Reference stored in stack
*/


// Symbols (to make a value unique)
const v1 = Symbol(123);
const v2 = Symbol(123);
console.log(v1==v2, typeof v1, typeof v2);

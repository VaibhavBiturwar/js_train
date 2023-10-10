// If statements
// if(true){
//     console.log("True");
// }
// if(2 =="2"){
//     console.log("2 == '2'");
// }
// if(2 === "2"){
//     console.log("2 === '2'");
// }else{
//     console.log("2 !== '2'");
// }
// Comparison Operators
//  <, >, <=, >=, == , !=, ===

// Implicit Scope of if statement
// if(true) console.log("Single line implicit code");
// if(true) console.log("Single line implicit code"), console.log("With multiple statements");



// Falsy Values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN.

// Truthy Values"
// true, "0", 'false', " ", {}, [], function() 

// Check for empty object
// const emptyObject = {}
// if(Object.keys(emptyObject).length == 0){
//     console.log("Object is empty");
// }



// Nullish Coalesce Operator(??)
// Checks only for null or undefined
// 15 ?? 20 => 15

// null ?? 20 => 20
// 20 ?? null => 20

// undefined ?? 20 => 20 
// 20 ?? undefined => 20

// null ?? 20 ?? 30 => 20
console.log(  undefined ?? null );

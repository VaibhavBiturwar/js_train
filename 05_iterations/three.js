// "for of" loop
const arr1 = "The quick brown fox!"
for (const num of arr1) {
    // console.log(`char: ${num}`);   
}

// Maps
// Key-value pairs | holds only unique values
// Map is not iterable, hence cannot be used with forin loop.
const myMap = new Map();
myMap.set('IN', "India");
myMap.set('CR', "Croatia");
myMap.set('FR', "France");
myMap.set('IN', "India");   // Duplicate value | not inserted
// console.log(myMap);

// Iterating through map using for-of loop
for (const [key,value] of myMap) { // This syntax does not work for objects
    console.log(`key: ${key} | value: ${value}`);
}

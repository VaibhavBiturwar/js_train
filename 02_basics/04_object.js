// Object assignment
const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "c", 4: "d" };

// const obj3 = Object.assign(obj1,obj2); // Adds obj2 to obj1
// console.log("3 ",obj3); // 3  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log("1 ",obj1); // 1  { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

// const obj3 = Object.assign({}, obj1, obj2);
const obj3 = { ...obj1, ...obj2 };
// console.log("3 ",obj3);

// Keys of object
// console.log(Object.keys(obj3)); // [ '1', '2', '3', '4' ]

// Values of object
// console.log(Object.values(obj3)); // [ 'a', 'b', 'c', 'd' ]

// Entries of object
// console.log(Object.entries(obj3)); // [ [ '1', 'a' ], [ '2', 'b' ], [ '3', 'c' ], [ '4', 'd' ] ]

// Check if key exists
// console.log(obj3.hasOwnProperty('1')); // true


// Object de-structuring
const obj4 = {
    first:"first",
    second:"second",
    third:"third",
}
const {first,second,third} = obj4;
// console.log(first,second, third);









// Shallow Copy Check
/*
In JavaScript, standard built-in object-copy operations (spread syntax, 
Array.prototype.concat(), Array.prototype.slice(), Array.from(), 
Object.assign(), and Object.create()) do not create deep copies 
(instead, they create shallow copies).
*/

const mainObj = {
    city:"Raipur",
    name: {
        fname:"Vaibhav",
        lname:"Biturwar"
    },
    lang:["hindi", "english"],
}

// const shallowCopyObj = Object.assign({},mainObj)
const shallowCopyObj = {...mainObj}

// shallowCopyObj.city="Pune" 
// shallowCopyObj.name.fname = "Rohan";
// shallowCopyObj.lang[0] = "marathi";
/*
 non-primitive datatypes are shallow copied (reference is passed), 
 hence making changes to any value in the object causes its value
 to change everywhere.
*/
// console.log({mainObj});    //  city: 'Raipur' | fname:"Rohan" | lang: [ 'marathi', 'english' ]
// console.log({copyObj: shallowCopyObj});   //   city: 'Pune'| fname:"Rohan" | lang: [ 'marathi', 'english' ]



// Deep Copy
/*
One way to make a deep copy of a JavaScript object, if it can be serialized,
is to use JSON.stringify() to convert the object to a JSON string,
and then JSON.parse() to convert the string back into a (completely new)
JavaScript object:
*/

const deepCopyObj = JSON.parse(JSON.stringify(mainObj));
deepCopyObj.city="Pune" 
deepCopyObj.name.fname = "Rohan";
deepCopyObj.lang[0] = "marathi";
console.log({mainObj}); // remains intact
console.log({deepCopyObj}); // city: 'Pune'| fname:"Rohan" | lang: [ 'marathi', 'english' ]




















// Singleton object is created using constructor method
// const jsObj = Object.create(Object.prototype, {
//   name: {value:"Vaibhav"}
// });
// Not working


// Object literal
const jsObj = {
    name:"Vaibhav", // under-the-hood.  "name":"Vaibhav"
    surname:"Biturwar",
    age:25,
    place:"Pune",
    mob:"9988776655"
}
// console.log(jsObj.name)
// console.log(jsObj['name'])


// Using Symbols inside an object
const mySym = Symbol("key1");
const myObj = {
    [mySym]: "Symbol Value"
} ;
// console.log(myObj); // { [Symbol(key1)]: 'Symbol Value' }


// change value
jsObj.place = "Raipur";


// Freeze object;
Object.freeze(jsObj);
jsObj.age = 100;
// console.log(jsObj) // age: 25,



// Functions in objects
const greetObj = {
    morning: function morning() {
        console.log("Good Morning");
    },
    evening: function evening() {
        console.log("Good evening");
    },
    night: function night() {
        console.log("Good night");
    }
}


greetObj.morning();
greetObj.evening();
greetObj.night();
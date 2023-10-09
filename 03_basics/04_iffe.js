// IFFE Immediately Invoked Functions Expression 
// Anonymous functions 

// Normal Functions
// Named IFFE
(function chai() {
        console.log(`DB Connection using normal function`);
})(); // ********* semicolon is necessary. *********

// Arrow function
// Un-named IFFE
( ()=>{
    console.log(`DB Connection using arrow function`);
} )();


// With Parameters
( (data)=>{
    console.log(`DB Connection with  ${data}`);
} )("with parameters");
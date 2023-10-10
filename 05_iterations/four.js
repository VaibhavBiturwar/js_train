// Iterating over objects using for-in loop
const myObj = {
    c:'C',
    cpp: 'C++',
    js:"Javascript",
    ts:'TypeScript'
}

for (const key in myObj) {
    // console.log(`${key} : ${myObj[key]}`);
}

// forin loop on arrays 
const p = ["c","cpp", "html", "css", "js"]
for (const key in p) {
        // console.log(`key ${key} is ${p[key] }`);
}

// forIn loop provides index or key for accessing
// forOf loop provides the values directly.

// For each loop 
// Does not return anything

// using normal functions
p.forEach( function(item,index){
    // console.log(`item in forEach ${item}`);
} )

// using arrow functions
p.forEach((item)=>{
    // console.log(`item in forEach using arrow ${item}`);
})

// using functional reference
const printFn = (item,index,arr)=>{
    // console.log(`Printed using printFn ${item}`);
    console.log({item}, {index}, {arr});
}
p.forEach(printFn)
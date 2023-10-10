//Iterate over array of objects
const data = [
    {id:0, val:'js'},
    {id:1, val:'ts'},
    {id:2, val:'ms'},
]

data.forEach((item)=>{
    // console.log(item.id,item.val);
})

// Console.log max parameters
console.log("1","2","3","4");
console.groupCollapsed();
console.log(1);
console.log(2);
console.group();
console.log(3);
console.groupEnd();
console.log(4);
console.groupEnd();



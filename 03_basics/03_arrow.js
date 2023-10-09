// Arrow Functions 
// ES6 2015
// no *this* keyword in arrow functions


// *this* use current context in an object
const obj1 = {
    name:"Ronny",
    welcome:function() {
    console.log(`${this.name}, welcome to js train`);         
    // console.log(this); // { name: 'Sonny', welcome: [Function: welcome] }
    }
}
// obj1.welcome();
// obj1.name="Sonny";
// obj1.welcome();


// console.log(this); {} | in browser console => Window object(global)


function chai() {
    const uname = "asd";
    console.log(this); // large object
    console.log(this.uname); // undefined
}
// chai();


const arrowChai = ()=>{
    const uname = "Arrow Functions";
    console.log(this); // {}
    console.log(this.uname); // undefined
}
// arrowChai()


const implicitReturn = ()=>( {name:"Taz"});
// console.log(implicitReturn())



// Arrow function with rest operator
const sumWithArrow = (...val)=>{
    return val.reduce((sum,val)=> sum+val);
}
// console.log(sumWithArrow(1,2,3,4,5));



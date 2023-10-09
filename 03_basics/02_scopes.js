// Scopes

function one(){
    const outerFn = "OuterFn";
    function two(){
        const innerFn = "innerFn";
        console.log(outerFn);
    }
    // console.log(innerFn); // error
    two()
}
one();



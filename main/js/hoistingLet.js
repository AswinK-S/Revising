
// console.log(a);
// let a=0

// console.log(b) 
// const b=9


//shadowing
var c=3
{
    var c =4
    console.log(c);
}
console.log(c);

//function scope 
// in functional scope the let , var, const beheave in same way. it cannot be accessed out side the functional scope

function scope(){
    let val1=2
    var val2 = 3
    const val3 =4
    console.log(val1,val2,val3);
}
scope()
console.log(val2); //reference error ,val2 is not definde
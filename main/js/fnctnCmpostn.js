// function that takes the output of one function as the input of another function and creates a new function is function composition


// function toUpper(str){
//     return str.toUpperCase()
// }

// function reverse(str){
//     return str.split(' ').reverse().join(' ')
// }

// function compose(f,g){
//     console.log('f :',f,'g :',g);
//     return function(x){
//         console.log('x :',x);
//         return f(g(x))
//     }
// }

// let functionComposition = compose(toUpper,reverse)
// console.log(functionComposition('Hello how are you ?'))


//---------------------

let n=6
function multiply(x){
    let m= x*x
    console.log('M : ',m);
    return m
}

function add(x){
    let a=x+x
    console.log(' A : ',a)
    return a
}
function compose(add,multiply){
    // console.log('mul : ',multiply,'add : ',add);
    return function(n){
        return multiply(add(n))
    }
}

let minus = compose(multiply,add)
console.log(minus(n))
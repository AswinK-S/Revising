// function that takes the output of one function as the input of another function and creates a new function is function composition


function toUpper(str){
    return str.toUpperCase()
}

function reverse(str){
    return str.split(' ').reverse().join(' ')
}

function compose(f,g){
    return function(x){
        return f(g(x))
    }
}

let functionComposition = compose(toUpper,reverse)
console.log(functionComposition('Hello how are you ?'))
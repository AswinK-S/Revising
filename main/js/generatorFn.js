// generator function is a function that allows as to control the flow of execution.
//it is declared using 'function*'
//it can pause the execution and later resume it 


function* gnFn(){
    yield 1
    yield 'Aswin'
}

let fn = gnFn()
// console.log('yield 1 :',fn.next().value);
console.log('-----:',fn.next());
console.log('yield 2 :',fn.next().value);
console.log('-----:',fn.next());



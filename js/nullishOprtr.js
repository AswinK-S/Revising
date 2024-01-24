// if there is no value in the left-hand side it will take the right-hand side value(default value)

let a =null
let b=undefined
let c=false
console.log('log a :',a??55);
console.log('log b :',b??"b");
console.log('log c :',c??'c')
console.log('log c :',c??=0)


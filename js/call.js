// in the call method if we have to pass any arguments it can be passed separately,in bind() method the arguments is passed in array

function name(){
    console.log(`my name is ${this.name}`);
}

let obj ={
    name:'Aswin'
}

name.call(obj)
//-------------------------
let a={
    name:'Akshay',
    age:20,
    c:function(message,message1){
        console.log(message +' '+ message1 +' ' + this.name);
    }
}

let b ={
    name:'Suresh'
}
a.c.call(b, 'hello','how r u')
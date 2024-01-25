//it is similar to call() method , here the arguments are passed in array

let obj1 = {
    name:'Aswin',
    display:function(message,b){
        console.log(message + ' ' + b + this.name);
    }
}

let obj2 = {
    name:'Akshay',
}

let obj3 = obj1.display.bind(obj2,['hello'],['how are you'])
obj3()
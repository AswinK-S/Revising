let obj={
    name:'Aswin',
    display:function(message){
        console.log(message + ' ' + this.name);
    }
}

let obj1={
    name:'Akshay'
}

obj.display.apply(obj1,['hello'])
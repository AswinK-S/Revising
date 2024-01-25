let obj={
    name:'Aswin',
    display:function(){
        console.log('hello I am '+this.name);
    }
}

let obj1={
    name:'Akshay'
}

let c=obj.display.bind(obj1)
c()
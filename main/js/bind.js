let obj={
    name:'Aswin',
    display:function(message){
        console.log(message+ ' ' +this.name);
    }
}

let obj1={
    name:'Akshay'
}

let c=obj.display.bind(obj1,['hello'])
c()
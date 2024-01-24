function name(){
    console.log(`my name is ${this.name}`);
}

let obj ={
    name:'Aswin'
}

name.call(obj)
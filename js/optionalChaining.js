// optional chaining is an error proof way to access nested object properties
let obj ={

    dog:{
        name:"Buddy"
    }
}

console.log(obj.cat?.name);
console.log(obj.dog.name);
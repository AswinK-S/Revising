let obj1 = {
    name:'Aswin',
    age:24,
    country:'India'
}

delete obj1.country
console.log(obj1);

Object.freeze(obj1)
delete obj1.age
console.log(obj1);
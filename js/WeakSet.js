let obj1={}
let obj2={}

obj1.age=24
obj2.age=23

console.log(obj1,'< = obj1  obj2 = >',obj2);

let weakSet = new WeakSet()
weakSet.add(obj1,obj2)
console.log(weakSet.has(obj1));

// weak set remove the object without reference
obj1=null
console.log(weakSet.has(obj1))
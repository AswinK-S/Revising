let obj1 = {};
let obj2 = {};

obj1.age = 24;
obj2.age = 23;

console.log(obj1, '< = obj1  obj2 = >', obj2);

let weakSet = new WeakSet();
weakSet.add(obj2);
weakSet.add(obj1);

console.log(weakSet.has(obj1)); // true
console.log(weakSet.has(obj2)); // true

// Remove the strong reference to obj1
// obj1 = null;

console.log(weakSet.has(obj1)); // false
console.log(weakSet.has(obj2)); // true

console.log(weakSet); // WeakSet { [items] }


const itemsArray = Array.from(weakSet);

// Log the contents of the array.
console.log(itemsArray);

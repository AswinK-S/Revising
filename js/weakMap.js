let weakMap = new WeakMap()
let obj1 = {name:'Aswin'}
let obj2 = {name:'Fulail'}
weakMap.set(obj1,'js')


//Map() can be iterated

let strongMap = new Map()
strongMap.set(obj1,'badge')
strongMap.set(obj2,'boarding')

console.log('size of strongMap :',strongMap.size);
for(let [key,value] of strongMap){
    console.log('key :',key,' : value :', value)
}


console.log(Object.keys(obj1).length);
console.log(strongMap.size);

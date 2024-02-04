let obj ={
    name:"Aswin"
}

let deepCopy = JSON.parse(JSON.stringify(obj))
console.log(deepCopy);
deepCopy.age=24
console.log('deepcopy : ',deepCopy,' orginal : ',obj)


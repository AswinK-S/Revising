// find the sum using loop

let arr=[{ab:3},{cd:6},{ef:7},{gh:9},{ig:4}]
let sum = 0
for(let obj of arr){
    for(let key in obj){
        sum+=obj[key];
    }
}

console.log(sum);


let array=[1,12,2,4,5,[23,24,3,55,[2355,325,3,4]],[2,1,34.54,3,4,[2,14,45,66]]]

let a=flatMap(array)
console.log(a);
console.log(array.flat(1))

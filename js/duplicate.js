let array =[2,3,4,4,6,7]

let array1 = new Set(array)
let arr = Array.from(array1)
console.log('arr :',arr);
console.log(array1);

let sumOf4 = array.filter(a=>a==4).reduce((sum,curr)=>sum+curr)
let highest =array.reduce((max,curr)=>{
    if(max<curr){
        max=curr
    }
    return max
})
console.log('highest :',highest);
console.log('sum of 4',sumOf4);

let removeHighest = array.reduce((h,curr)=>{
    if(h<curr){
        h=curr
    }
    return h
})
let r=array.filter((s)=>{return s!==removeHighest})

console.log('array after remove highest :',removeHighest, r);
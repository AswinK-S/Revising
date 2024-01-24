function quickSort(array){
    if(array.length<2){
        return array
    }
    let pivotIndex = Math.floor(array.length/2)
    let pivot = array[pivotIndex]
    array.splice(pivotIndex,1)
    let left = []
    let right =[]
    for(let i=0;i<array.length;i++){
         if(array[i]<pivot){
            left.push(array[i])
         }else{
            right.push(array[i])
         }
    }
    return [...quickSort(left),pivot,...quickSort(right)]
}

let array=[8,5,4,6,97,5]
console.log(quickSort(array));
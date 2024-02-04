let array =[2,3,4,4,6,7]

function removeDuplicate(array){
    let set = new Set()
    for(let i=0;i<array.length;i++){
        if(!set.has(array[i])){
            set.add(array[i])
        }else{
            array.splice(i,1)
            i--
        }
    }

    console.log(array);

}

removeDuplicate(array)
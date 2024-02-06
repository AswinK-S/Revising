let num = 5

function PassByValue(s){
    return s+=4

}

console.log('s :',PassByValue(num)); 
console.log('num :',num);

function recursion(n){
if(n>5){
    return console.log('stoped');
}else{
    console.log(n);
    recursion(n+1)
}
}

let n=1
recursion(n)

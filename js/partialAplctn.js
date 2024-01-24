function A(n1,n2){
    return n2+n1
}

let b=A.bind(null,6)
console.log(b);
console.log(b(6));
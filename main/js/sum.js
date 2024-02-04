// find the sum by calling with dot


let arr=[[{ab:1},[{ac:2,ad:1}],{cd:3}],4]

console.log('length :',arr.length,' , 0th elem : ',arr[0], ' ,1 th elem : ',arr[1]);
console.log(arr[0][0].ab);
console.log(arr[0][1][0].ac);
let sum = arr[0][0].ab+arr[0][1][0].ac+arr[0][1][0].ad+arr[0][2].cd+arr[1]
console.log(sum);